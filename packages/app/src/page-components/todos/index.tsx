"use server";
import Link from "next/link";
import type { ReadTodoListActionParams } from "../../actions/readTodoList/types";
import { TodoList } from "../../components/TodoList";
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
type SearchParams = {
  todoName?: string;
  done?: boolean;
  limit?: number;
  page?: number;
};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

/**
 * describe this page's features
 */
const TodosPage = async ({ params: _, searchParams }: Props) => {
  const { todoName, done, limit, page } = await searchParams;
  const params: ReadTodoListActionParams = {
    where: {
      todoName,
      done: done !== undefined ? Boolean(done) : undefined,
    },
    orderBy: {
      createdAt: "desc",
    },
    limit: limit || 10,
    page: Number(page) || 1,
  };

  return (
    <div>
      <Link href="/todos/new">New Todo</Link>
      <TodoList params={params} basePath="/todos" />
    </div>
  );
};

export default TodosPage;
