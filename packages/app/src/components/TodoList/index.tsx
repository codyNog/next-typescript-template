import Link from "next/link";
import qs from "qs";
import { getI18n } from "shared/libs/i18n/server";
import { readTodoListAction } from "../../actions/readTodoList";
import type { ReadTodoListActionParams } from "../../actions/readTodoList/types";
import { TodoListItem } from "../TodoListItem";
import _styles from "./index.module.css";

type Props = {
  params: ReadTodoListActionParams;
  basePath: string;
};

export const TodoList = async ({ params, basePath }: Props) => {
  const [_t, { data, totalCount }] = await Promise.all([
    getI18n(),
    readTodoListAction(params),
  ]);

  const pages = Math.ceil(totalCount / (params.limit || 1));

  return (
    <div>
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
