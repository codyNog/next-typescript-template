import { readTodosAction } from "@/actions/readTodos";
import { readTodosActionMock } from "@/actions/readTodos/mock";

test("readTodosAction", () => {
  // test code
  expect(readTodosAction).toBeTruthy();
  expect(readTodosActionMock.params).toBeTruthy();
});
