import { GetUsersParameter } from "~/types/User";
import { useGetUsersParameterForm } from "~/components/User/GetUsersParameterForm/hooks";

type Props = { onSubmit: (parameter: GetUsersParameter) => void };

/**
 * @prop onSubmit - submit 時のハンドラー
 * @returns GetUsersParameter を組み立てるフォーム
 **/
export const GetUsersParameterForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useGetUsersParameterForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        name
        <input {...register("name")} />
      </label>
      <input {...register("maxAge")} />
    </form>
  );
};
