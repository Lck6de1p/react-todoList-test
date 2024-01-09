import "./App.css";
import { MyContextProvider } from "./components/context";
import Input from "./components/input";
import List from "./components/todoList";

function App() {
  return (
    <MyContextProvider>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <Input />
      <div>
        <List />
      </div>
    </MyContextProvider>
  );
}

export default App;
