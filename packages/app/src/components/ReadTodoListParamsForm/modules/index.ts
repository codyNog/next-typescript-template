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
const toDefaultValues = (): ReadTodoListParamsFormValues => {
  return {
    id: "",
  };
};

export const readTodoListParamsFormModules = {
  toCreateParams,
  toUpdateParams,
  toDefaultValues,
};
