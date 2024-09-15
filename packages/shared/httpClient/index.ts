import { Fetcher } from "openapi-typescript-fetch";

/**
 * http client
 */
const fetcher = Fetcher.for();
fetcher.configure({
  baseUrl: process.env.BASE_URL,
});
