import Link from "next/link";
import { redirect } from "next/navigation";
import qs from "qs";
import { Suspense } from "react";
import { getI18n } from "shared/libs/i18n/server";
import { readTodoListAction } from "../../actions/readTodoList";
import type { ReadTodoListActionParams } from "../../actions/readTodoList/types";
import { ReadTodoListParamsForm } from "../ReadTodoListParamsForm";
import type { ReadTodoListParamsFormValues } from "../ReadTodoListParamsForm/types";
import { TodoListItem } from "../TodoListItem";
import _styles from "./index.module.css";

type Props = {
  params: ReadTodoListActionParams;
  basePath: string;
};

export const TodoList = async ({ params, basePath }: Props) => {
  const _t = await getI18n();
  const readTodoList = async () => {
    return await readTodoListAction(params);
  };
  const { data, totalCount } = await readTodoList();

  async function action(values: ReadTodoListParamsFormValues) {
    "use server";

    const query = qs.stringify(values);
    const path = `${basePath}?${query}`;
    redirect(path);
  }
  const defaultValues: ReadTodoListParamsFormValues = {
    todoName: params.where?.todoName,
    done: params.where?.done,
  };
  const pages = Math.ceil(totalCount / (params.limit || 1));

  return (
    <div>
      <Suspense>
        <ReadTodoListParamsForm action={action} defaultValues={defaultValues} />
      </Suspense>
      {data.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} basePath={basePath} />
      ))}
      {Array.from({ length: pages }, (_, index) => {
        const query = qs.stringify({ ...params.where, page: index + 1 });
        const path = `${basePath}?${query}`;
        return (
          <Link key={String(index)} href={path}>
            <button type="button">{index + 1}</button>
          </Link>
        );
      })}
    </div>
  );
};
