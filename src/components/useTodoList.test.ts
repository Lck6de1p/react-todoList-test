import { expect, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTodoList } from "./useTodoList";
test("happy path", async () => {
  const { result } = renderHook(() => useTodoList());

  expect(result.current.todos).toHaveLength(0);

  act(() => {
    result.current.addTodo("");
  });
  expect(result.current.todos).toHaveLength(0);

  act(() => {
    result.current.addTodo("111");
  });
  expect(result.current.todos).toHaveLength(1);

  act(() => {
    result.current.addTodo("222");
  });
  expect(result.current.todos).toHaveLength(2);

  act(() => {
    result.current.deleteTodoByIndex(1);
  });
  expect(result.current.todos).toHaveLength(1);

  act(() => {
    result.current.toggleTodoByIndex(0);
  });
  expect(result.current.todos[0].completed).toBeTruthy();

  act(() => {
    result.current.toggleTodoByIndex(0);
  });
  expect(result.current.todos[0].completed).toBeFalsy();
});
