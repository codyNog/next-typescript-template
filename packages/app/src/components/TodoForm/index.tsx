"use client";
import { useTodoForm } from "./hooks";
import styles from "./index.module.css";
import type { Props } from "./types";

/**
 * Form Component for create or update Todo.
 * @param {Props} props - {@link Props}
 */
export const TodoForm = (props: Props) => {
  const { form, action, fields, t: _, onChange } = useTodoForm(props);

  return (
    <form
      id={form.id}
      action={action}
      onChange={onChange}
      noValidate
      className={styles.todoForm}
    >
      <input
        type="hidden"
        className={styles.secureHidden}
        key={fields.id.key}
        id={fields.id.id}
        name={fields.id.name}
        defaultValue={fields.id.initialValue}
      />

      <div className={styles.formGroup}>
        <label htmlFor={fields.todoName.id} className={styles.label}>
          Todo名
        </label>
        <input
          type="text"
          key={fields.todoName.key}
          id={fields.todoName.id}
          name={fields.todoName.name}
          defaultValue={fields.todoName.initialValue}
          className={styles.textInput}
          placeholder="Todoを入力してください"
        />
      </div>

      <div className={styles.checkboxGroup}>
        <input
          type="checkbox"
          key={fields.done.key}
          id={fields.done.id}
          name={fields.done.name}
          defaultChecked={fields.done.initialValue === "on"}
          className={styles.checkbox}
        />
        <label htmlFor={fields.done.id} className={styles.label}>
          完了
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        {fields.id.initialValue ? "更新" : "作成"}
      </button>
    </form>
  );
};
