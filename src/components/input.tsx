import { useState, useContext } from "react";
import { TodoListContext, MyContextProps } from "./context";
import "./input.css";
export default function App() {
  const [input, setInput] = useState<string>("");

  const { addTodo } = useContext(TodoListContext) as MyContextProps;
  const handleClick = () => {
    addTodo(input.trim());
    setInput("");
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        placeholder="text"
        className="appearance-none border rounded w-500 mr-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
          }
        }}
      />
      <button
        onClick={() => handleClick()}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        ADD TODO
      </button>
    </div>
  );
}
