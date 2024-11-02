import { stringify } from "qs";

/**
 * IDsの配列をクエリパラメータ文字列に変換する関数
 * @param baseUrl - ベースとなるURL
 * @param ids - IDの配列
 * @param paramName - クエリパラメータの名前（デフォルトは 'id'）
 * @returns クエリパラメータを含む完全なURL
 */
export const createQueryParamsFromStringArray = (
  baseUrl: string,
  items: string[],
  paramName: string,
): string => {
  // クエリパラメータオブジェクトを作成
  const queryParams = {
    [paramName]: items,
  };

  // クエリパラメータを文字列に変換
  const queryString = stringify(queryParams, { arrayFormat: "repeat" });

  // ベースURLにクエリパラメータを追加
  const fullUrl = `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}${queryString}`;

  return fullUrl;
};

export const getArrayFromQueryParams = (
  param: string | string[] | undefined,
): string[] => {
  if (!param) {
    return [];
  }

  if (Array.isArray(param)) {
    return param;
  }

  return [param];
};

export const searchParamsToObject = (searchParams: URLSearchParams): Record<string, string> => {
  return Object.fromEntries(searchParams.entries());
}