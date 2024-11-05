"use server";
import { readTodosAction } from "../actions/readTodos";
import type { ReadTodosActionParams } from "../actions/readTodos/types";

/**
 * fix or remove this type
 */
type Params = { locale: string };

/**
 * fix or remove this type
 */
// biome-ignore lint:
type SearchParams = {};

type Props = {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
};

/**
 * describe this page's features
 */
const Page = async ({ params: _, searchParams: __ }: Props) => {
  const params: ReadTodosActionParams = {};
  const todos = await readTodosAction(params);
  console.log(todos);

  return "aaa";
};

export default Page;
