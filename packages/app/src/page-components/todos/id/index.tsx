"use server";
import { redirect } from "next/navigation";
import { readTodoAction } from "../../../actions/readTodo";
import { updateTodoAction } from "../../../actions/updateTodo";
import type { UpdateTodoActionParams } from "../../../actions/updateTodo/types";
import { TodoDetail } from "../../../components/TodoDetail";
import { TodoForm } from "../../../components/TodoForm";
import { todoFormModules } from "../../../components/TodoForm/modules";
import type { TodoFormValues } from "../../../components/TodoForm/types";
import _styles from "./index.module.css";

/**
 * fix or remove this type
 */
type Params = {
  locale: string;
  id: string;
};

/**
 * fix or remove this type
 */
type SearchParams = {
  edit?: boolean;
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

/**
 * describe this page's features
 */
const TodosIdPage = async ({ params, searchParams }: Props) => {
  const { id } = await params;
  const { edit } = await searchParams;
  const todo = await readTodoAction({ id });

  async function action(values: TodoFormValues) {
    "use server";
    const params: UpdateTodoActionParams =
      todoFormModules.toUpdateParams(values);
    await updateTodoAction(params);
    redirect(`/todos/${id}`);
  }

  if (edit) {
    return (
      <TodoForm
        defaultValues={todoFormModules.toDefaultValues(todo)}
        action={action}
      />
    );
  }

  return <TodoDetail params={{ id }} />;
};

export default TodosIdPage;
