import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type FormEvent, useActionState, useCallback, useMemo } from "react";
import { useBrowserStorage } from "shared/libs/hooks/storage";
import { useI18n } from "shared/libs/i18n/client";
import {
  type Props,
  type TodoFormValues,
  todoFormValuesSchema,
} from "../types";

const emptyTodoFormValues: TodoFormValues = {
  id: "",
  todoName: "",
  done: false,
};

// ストレージフックを最適化して常に同じ順序で呼び出されるようにする
const useTodoFormStorage = ({
  defaultValues,
}: {
  defaultValues?: TodoFormValues;
}) => {
  // キーの生成をコンポーネントのトップレベルで行う
  const storageKey = defaultValues
    ? `todoForm?id=${defaultValues.id}`
    : "todoForm";
  return useBrowserStorage<TodoFormValues>(
    storageKey,
    defaultValues || emptyTodoFormValues,
  );
};

export const useTodoForm = ({
  action: serverAction,
  defaultValues,
  enableAutoSave,
}: Props) => {
  // ストレージフックを最初に呼び出す
  const { get, set, remove } = useTodoFormStorage({ defaultValues });
  const { data } = get;

  // useActionStateを次に呼び出す
  const [lastResult, action, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      const submission = parseWithZod(formData, {
        schema: todoFormValuesSchema,
      });

      if (submission.status !== "success") {
        return submission.reply();
      }

      await serverAction(submission.value);
      await remove();
      return submission.reply();
    },
    undefined,
  );

  // その後で他のフックを呼び出す
  const defaultValue = useMemo(
    () => (enableAutoSave ? data : defaultValues),
    [enableAutoSave, data, defaultValues],
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: todoFormValuesSchema });
    },
    defaultValue,
  });

  const t = useI18n();

  const onChange = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (!enableAutoSave) return;
      const formData = new FormData(event.currentTarget);
      const object = Object.fromEntries(formData.entries());
      const values: TodoFormValues = {
        ...object,
        todoName: object?.todoName ? String(object.todoName) : "",
      };
      set(values).catch(console.error);
    },
    [enableAutoSave, set],
  );

  return {
    action,
    form,
    fields,
    t,
    isPending,
    onChange,
  };
};
