import Link from "next/link";
import { getI18n } from "shared/libs/i18n/server";
import { readTodoDetailAction } from "../../actions/readTodoDetail";
import type { ReadTodoDetailActionParams } from "../../actions/readTodoDetail/types";
import styles from "./index.module.css";

type Props = {
  params: ReadTodoDetailActionParams;
};

export const TodoDetail = async ({ params }: Props) => {
  const _t = await getI18n();
  const todo = await readTodoDetailAction(params);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/todos" className={styles.backLink}>
          ← 戻る
        </Link>
        <Link href={`/todos/${todo.id}?edit=true`} className={styles.editLink}>
          編集
        </Link>
      </div>

      <div className={styles.content}>
        <h1 className={styles.todoName}>{todo.todoName}</h1>

        <div className={todo.done ? styles.statusDone : styles.statusNotDone}>
          {todo.done ? "完了" : "未完了"}
        </div>

        <div className={styles.infoGroup}>
          <div>
            <div className={styles.infoLabel}>作成日</div>
            <div className={styles.infoValue}>
              {todo.createdAt.toDateString()}
            </div>
          </div>

          <div>
            <div className={styles.infoLabel}>更新日</div>
            <div className={styles.infoValue}>
              {todo.updatedAt.toDateString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
