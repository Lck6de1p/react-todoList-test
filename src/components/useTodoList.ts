import { useState } from "react";
export type Todo = {
  id?: number;
  todo: string;
  completed?: boolean;
  createdAt?: number;
};

let id = 0;
export function useTodoList() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const addTodo = (e: Todo["todo"]) => {
    if (e.length === 0) return;
    setTodo([
      { todo: e, createdAt: Date.now(), id: id++, completed: false },
      ...todo,
    ]);
  };

  const deleteTodoByIndex = (index: number) => {
    setTodo(todo.filter((_e, i) => i !== index));
  };

  const toggleTodoByIndex = (index: number) => {
    setTodo(
      todo.map((v, i) => {
        if (index === i) {
          return {
            ...v,
            completed: !v.completed,
          };
        }
        return v;
      })
    );
  };

  return { todos: todo, addTodo, deleteTodoByIndex, toggleTodoByIndex };
}
