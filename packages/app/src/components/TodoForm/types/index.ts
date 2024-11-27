import z from "zod";

export const todoFormValuesSchema = z.object({
  id: z.string().optional(),
  todoName: z.string().min(1),
  done: z.boolean().optional(),
});

export type TodoFormValues = z.infer<typeof todoFormValuesSchema>;

/**
 * Props for TodoForm.
 * @property {Function} action - Action to be executed when the form is submitted.
 * @property {Object} defaultValues - Default values for the form.
 * @property {Boolean} enableAutoSave - Enable auto save feature.
 */
export type Props = {
  action: (value: TodoFormValues) => Promise<void>;
  defaultValues?: TodoFormValues;
  enableAutoSave?: boolean;
};
