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
  return "Page";
};

export default Page;
