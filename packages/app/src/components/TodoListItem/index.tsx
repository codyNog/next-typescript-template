import { revalidatePath } from "next/cache";
import Link from "next/link";
import { deleteTodoAction } from "../../actions/deleteTodo";
import type { ReadTodoListActionReturnValue } from "../../actions/readTodoList/types";
import styles from "./index.module.css";

type Props = {
  todo: ReadTodoListActionReturnValue["data"][number];
  basePath: string;
  disabled?: boolean;
};

export const TodoListItem = async ({ todo, basePath, disabled }: Props) => {
  async function deleteTodo() {
    "use server";
    await deleteTodoAction({ id: todo.id });
    revalidatePath(basePath);
  }

  return (
    <div className={styles.todoItem}>
      <Link href={`${basePath}/${todo.id}`} className={styles.todoLink}>
        <div className={styles.todoName}>{todo.todoName}</div>
        <div
          className={`${styles.todoStatus} ${todo.done ? styles.todoDone : styles.todoNotDone}`}
        >
          {todo.done ? "完了" : "未完了"}
        </div>
        <div className={styles.todoDate}>
          作成日: {todo.createdAt.toDateString()}
        </div>
        <div className={styles.todoDate}>
          更新日: {todo.updatedAt.toDateString()}
        </div>
      </Link>
      <button
        type="button"
        onClick={deleteTodo}
        className={styles.deleteButton}
        disabled={disabled}
      >
        削除
      </button>
    </div>
  );
};
