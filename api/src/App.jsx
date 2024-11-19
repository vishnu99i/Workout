import React from "react";
import Api from "./components/api";
import Todo from "./components/todo";
import TodoLS from "./components/todolocalstorage"

function App() {

  return (
    <div>
      <Api />
      <Todo />
      <TodoLS />
    </div>
  )
}

export default App;