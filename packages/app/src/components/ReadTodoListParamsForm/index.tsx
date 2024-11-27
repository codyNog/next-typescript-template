"use client";
import { useReadTodoListParamsForm } from "./hooks";
import styles from "./index.module.css";
import type { Props } from "./types";

/**
 * Form Component for create or update ReadTodoListParams.
 * @param {Props} props - {@link Props}
 */
export const ReadTodoListParamsForm = (props: Props) => {
  const {
    form,
    action,
    fields,
    t: _,
    onChange,
    isPending,
  } = useReadTodoListParamsForm(props);

  return (
    <form
      id={form.id}
      action={action}
      onChange={onChange}
      noValidate
      className={styles.searchForm}
    >
      <div className={styles.inputGroup}>
        <label htmlFor={fields.todoName.id} className={styles.label}>
          Todo名
        </label>
        <input
          key={fields.todoName.key}
          id={fields.todoName.id}
          name={fields.todoName.name}
          defaultValue={fields.todoName.initialValue}
          className={styles.textInput}
          placeholder="Todoを検索..."
        />
      </div>

      <div className={styles.checkboxGroup}>
        <label htmlFor={fields.done.id} className={styles.label}>
          <input
            type="checkbox"
            key={fields.done.key}
            id={fields.done.id}
            name={fields.done.name}
            defaultChecked={!!fields.done.initialValue}
            className={styles.checkbox}
          />
          完了済みのみ表示
        </label>
      </div>

      <div className={styles.buttonGroup}>
        <button type="reset" className={styles.resetButton}>
          リセット
        </button>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isPending}
        >
          検索
        </button>
      </div>
    </form>
  );
};
