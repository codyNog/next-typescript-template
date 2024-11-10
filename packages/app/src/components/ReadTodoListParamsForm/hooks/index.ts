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

const useReadTodoListParamsFormStorage = ({
  defaultValues,
}: { defaultValues?: ReadTodoListParamsFormValues }) => {
  const key = "readTodoListParamsForm";
  const { get, set, remove } = useBrowserStorage<ReadTodoListParamsFormValues>(
    key,
    defaultValues || emptyReadTodoListParamsFormValues,
  );

  return { get, set, remove };
};

export const useReadTodoListParamsForm = ({
  action: serverAction,
  defaultValues,
  enableAutoSave,
}: Props) => {
  const { get, set, remove } = useReadTodoListParamsFormStorage({
    defaultValues,
  });
  const { data } = get;
  const [lastResult, action, isPending] = useActionState(
    async (_: unknown, formData: FormData) => {
      const submission = parseWithZod(formData, {
        schema: readTodoListParamsFormValuesSchema,
      });

      if (submission.status !== "success") {
        return submission.reply();
      }
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
      return parseWithZod(formData, {
        schema: readTodoListParamsFormValuesSchema,
      });
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
