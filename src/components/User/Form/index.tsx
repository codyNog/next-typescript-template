import { useUserForm } from "~/components/User/Form/hooks";
import { User } from "~/types/User";

type Props = {
  onSubmit: (user: User) => void;
};

/**
 * @prop onSubmit - submitしたときのハンドラー
 * @returns ユーザー情報を送信するフォーム
 **/
export const UserForm = ({ onSubmit }: Props): JSX.Element => {
  const { register, handleSubmit } = useUserForm();

  return (
    <form onSubmit={() => handleSubmit(onSubmit)}>
      <label>
        name
        <input {...register("name")} />
      </label>
      <label>
        age
        <input {...register("age")} />
      </label>
    </form>
  );
};
