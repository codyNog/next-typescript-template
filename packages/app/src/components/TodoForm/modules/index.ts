import type { CreateTodoActionParams } from "../../../actions/createTodo/types";
import type { ReadTodoActionReturnValue } from "../../../actions/readTodo/types";
import type { UpdateTodoActionParams } from "../../../actions/updateTodo/types";
import type { TodoFormValues } from "../types";

// fix this to convert form values to create params
const toCreateParams = (values: TodoFormValues): CreateTodoActionParams => {
  return { ...values, done: !!values.done };
};

// fix this to convert form values to update params
const toUpdateParams = (values: TodoFormValues): UpdateTodoActionParams => {
  if (!values.id) throw new Error("id is required");
  return {
    ...values,
    id: values.id,
    done: !!values.done,
  };
};

// fix this to convert data to default values
const toDefaultValues = (data: ReadTodoActionReturnValue): TodoFormValues => {
  return data;
};

export const todoFormModules = {
  toCreateParams,
  toUpdateParams,
  toDefaultValues,
};
