import { FC, createContext } from "react";
import { useTodoList, Todo } from "./useTodoList";

export interface MyContextProps {
  todos: Todo[];
  addTodo: (newValue: Todo['todo']) => void;
  deleteTodoByIndex: (index: number) => void;
  toggleTodoByIndex: (index: number) => void;
}

export const TodoListContext = createContext<MyContextProps | undefined>(
  undefined
);

export const MyContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { todos, addTodo, deleteTodoByIndex, toggleTodoByIndex } = useTodoList();

  return (
    <TodoListContext.Provider
      value={{ todos, addTodo, deleteTodoByIndex, toggleTodoByIndex }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
