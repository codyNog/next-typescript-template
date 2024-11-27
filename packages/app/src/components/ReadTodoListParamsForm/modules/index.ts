import type { ReadTodoListActionParams } from "../../../actions/readTodoList/types";
import type { ReadTodoListParamsFormValues } from "../types";

// fix this to convert form values to create params
const toCreateParams = (values: ReadTodoListParamsFormValues) => {
  return { ...values };
};

// fix this to convert form values to update params
const toUpdateParams = (values: ReadTodoListParamsFormValues) => {
  return {
    ...values,
  };
};

// fix this to convert data to default values
const toDefaultValues = (
  params: ReadTodoListActionParams,
): ReadTodoListParamsFormValues => {
  return {
    todoName: params.where?.todoName,
    done: params.where?.done,
  };
};

export const readTodoListParamsFormModules = {
  toCreateParams,
  toUpdateParams,
  toDefaultValues,
};
