import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const handleSaveEdit = () => {
    if (editText) {
      const updatedTodos = todos.map((todo, index) =>
        index === editIndex ? { ...todo, text: editText } : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
      setEditText("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">To-Do App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="border p-2 w-full mr-2"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 border rounded ${todo.completed ? "bg-green-100" : "bg-white"}`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleComplete(index)}
                className="mr-2"
              />
              {editIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border p-2"
                />
              ) : (
                <span className={`flex-1 ${todo.completed ? "line-through" : ""}`}>{todo.text}</span>
              )}
            </div>
            <div className="flex space-x-2">
              {editIndex === index ? (
                <button
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white p-1 rounded"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEditTodo(index)}
                  className="bg-yellow-500 text-white p-1 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;