"use server";
import { redirect } from "next/navigation";
import { createTodoAction } from "../../../actions/createTodo";
import type { CreateTodoActionParams } from "../../../actions/createTodo/types";
import { TodoForm } from "../../../components/TodoForm";
import { todoFormModules } from "../../../components/TodoForm/modules";
import type { TodoFormValues } from "../../../components/TodoForm/types";
import _styles from "./index.module.css";

/**
 * fix or remove this type
 */
type Params = {
  locale: string;
};

/**
 * fix or remove this type
 */
// biome-ignore lint:
type SearchParams = {};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

/**
 * describe this page's features
 */
const TodosNewPage = async ({ params: _, searchParams: __ }: Props) => {
  async function action(values: TodoFormValues) {
    "use server";
    const params: CreateTodoActionParams =
      todoFormModules.toCreateParams(values);
    await createTodoAction(params);
    redirect("/todos");
  }

  return <TodoForm action={action} />;
};

export default TodosNewPage;
