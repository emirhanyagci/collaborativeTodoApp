import { useEffect, useState } from "react";
import { getTodos } from "../services/apiUsers";
import Todo from "./Todo";
const TodosList = ({ userId, isManageable = false }) => {
  const [todos, setTodos] = useState([]);

  async function getTodoHandler() {
    const fetchedTodos = await getTodos(userId);
    setTodos(fetchedTodos);
  }
  useEffect(() => {
    if (userId) getTodoHandler(userId);
  }, [userId]);
  return (
    <ul className="space-y-3">
      {todos?.map((todo, index) => (
        <Todo key={index} isManageable={isManageable}>
          {todo}
        </Todo>
      ))}
    </ul>
  );
};

export default TodosList;
