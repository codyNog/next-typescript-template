import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { type FormEvent, useActionState, useCallback, useMemo } from "react";
import { useBrowserStorage } from "shared/libs/hooks/storage";
import { useI18n } from "shared/libs/i18n/client";
import {
  type Props,
  type ReadTodoListParamsFormValues,
  readTodoListParamsFormValuesSchema,
} from "../types";

const emptyReadTodoListParamsFormValues: ReadTodoListParamsFormValues = {};

// ストレージフックを最適化
const useReadTodoListParamsFormStorage = ({
  defaultValues,
}: {
  defaultValues?: ReadTodoListParamsFormValues;
}) => {
  // キーを定数として定義
  const STORAGE_KEY = "readTodoListParamsForm";
  return useBrowserStorage<ReadTodoListParamsFormValues>(
    STORAGE_KEY,
    defaultValues || emptyReadTodoListParamsFormValues,
  );
};

export const useReadTodoListParamsForm = ({
  action: serverAction,
  defaultValues,
  enableAutoSave,
}: Props) => {
  // ストレージフックを最初に呼び出す
  const { get, set, remove } = useReadTodoListParamsFormStorage({
    defaultValues,
  });
  const { data } = get;

  // useActionStateを次に呼び出す
  const [lastResult, action, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      const submission = parseWithZod(formData, {
        schema: readTodoListParamsFormValuesSchema,
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
      return parseWithZod(formData, {
        schema: readTodoListParamsFormValuesSchema,
      });
    },
    defaultValue,
  });

  const t = useI18n();

  const onChange = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      if (!enableAutoSave) return;
      const formData = new FormData(event.currentTarget);
      const values = Object.fromEntries(
        formData.entries(),
      ) as ReadTodoListParamsFormValues;
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
