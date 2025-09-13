/**
 * Define search params for this page
 */
// biome-ignore lint/complexity/noBannedTypes: Allow empty object for pages without search params
type SearchParams = {
  // Add your search params here
  // example: page?: string;
  // example: sort?: 'asc' | 'desc';
};

/**
 * Props for the index page component
 * Extends PageProps with typed search params
 */
type Props = PageProps<"/[locale]"> & {
  searchParams: Promise<SearchParams>;
};

/**
 * describe this page's features
 */
const Page = async ({ params, searchParams }: Props) => {
  const [_, __] = await Promise.all([params, searchParams]);
  return "Page";
};

export default Page;
