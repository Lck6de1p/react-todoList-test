import { useContext } from "react";
import { TodoListContext, MyContextProps } from "./context";

export default function App() {
  const { todos, deleteTodoByIndex, toggleTodoByIndex } = useContext(TodoListContext) as MyContextProps;
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center bg-white p-4 mb-2 border ${
                todo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
             <span onClick={() => toggleTodoByIndex(index)} className="cursor-pointer">
              {todo.todo}
            </span>
            <button onClick={() => deleteTodoByIndex(index)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
