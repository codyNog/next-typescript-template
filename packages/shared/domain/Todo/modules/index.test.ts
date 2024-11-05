import { describe, expect, it } from "bun:test";
import { readTodosParamsToQuery } from ".";
import type { ReadTodosParams } from "../types";

describe("TodoModules", async () => {
  it("readTodosParamsToQuery", async () => {
    const params: ReadTodosParams = {};
    const query = readTodosParamsToQuery(params);
    expect(query).toBeTruthy();
  });
});
