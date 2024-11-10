import z from "zod";

export const readTodoListParamsFormValuesSchema = z.object({
  todoName: z.string().optional(),
  done: z.boolean().optional(),
});

export type ReadTodoListParamsFormValues = z.infer<
  typeof readTodoListParamsFormValuesSchema
>;

/**
 * Props for ReadTodoListParamsForm.
 * @property {Function} action - Action to be executed when the form is submitted.
 * @property {Object} defaultValues - Default values for the form.
 * @property {Boolean} enableAutoSave - Enable auto save feature.
 */
export type Props = {
  action: (value: ReadTodoListParamsFormValues) => Promise<void>;
  defaultValues?: ReadTodoListParamsFormValues;
  enableAutoSave?: boolean;
};
