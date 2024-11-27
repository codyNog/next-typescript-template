"use server";
import Link from "next/link";
import { redirect } from "next/navigation";
import qs from "qs";
import { Suspense } from "react";
import type { ReadTodoListActionParams } from "../../actions/readTodoList/types";
import { ReadTodoListParamsForm } from "../../components/ReadTodoListParamsForm";
import { readTodoListParamsFormModules } from "../../components/ReadTodoListParamsForm/modules";
import type { ReadTodoListParamsFormValues } from "../../components/ReadTodoListParamsForm/types";
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
const TodosPage = async ({ searchParams }: Props) => {
  const [{ todoName, done, limit, page }] = await Promise.all([searchParams]);
  const basePath = "/todos";
  const readTodoListActionParams: ReadTodoListActionParams = {
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

  async function action(values: ReadTodoListParamsFormValues) {
    "use server";

    const query = qs.stringify(values);
    const path = `${basePath}?${query}`;
    redirect(path);
  }

  return (
    <div>
      <Link href={`${basePath}/new`}>New Todo</Link>
      <ReadTodoListParamsForm
        action={action}
        defaultValues={readTodoListParamsFormModules.toDefaultValues(
          readTodoListActionParams,
        )}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList params={readTodoListActionParams} basePath={basePath} />
      </Suspense>
    </div>
  );
};

export default TodosPage;
