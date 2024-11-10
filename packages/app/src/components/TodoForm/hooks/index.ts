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

const useTodoFormStorage = ({
  defaultValues,
}: { defaultValues?: TodoFormValues }) => {
  const key = defaultValues ? `todoForm?id=${defaultValues.id}` : "todoForm";
  const { get, set, remove } = useBrowserStorage<TodoFormValues>(
    key,
    defaultValues || emptyTodoFormValues,
  );

  return { get, set, remove };
};

export const useTodoForm = ({
  action: serverAction,
  defaultValues,
  enableAutoSave,
}: Props) => {
  const { get, set, remove } = useTodoFormStorage({ defaultValues });
  const { data } = get;
  const [lastResult, action, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      const submission = parseWithZod(formData, {
        schema: todoFormValuesSchema,
      });
      console.log(submission);
      if (submission.status !== "success") {
        return submission.reply();
      }
      console.log(submission.value);
      await serverAction(submission.value);
      remove();
    },
    undefined,
  );
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
      const formData = new FormData(event.currentTarget);
      const values = Object.fromEntries(formData.entries());
      set(values);
    },
    [set],
  );

  return { action, form, fields, t, isPending, onChange };
};
