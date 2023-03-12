import { GetUsersParameter } from "~/types/User";
import { useGetUsersParameterForm } from "~/components/User/GetUsersParameterForm/hooks";

type Props = { onSubmit: (parameter: GetUsersParameter) => void };

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
