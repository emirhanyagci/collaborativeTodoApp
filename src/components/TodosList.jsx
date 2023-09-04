import { useEffect, useState } from "react";
import { getTodos } from "../services/apiUsers";
const TodosList = ({ userId, isManageable = false }) => {
  const [todos, setTodos] = useState([]);

  async function getTodoHandler() {
    const fetchedTodos = await getTodos(userId);
    setTodos(fetchedTodos);
  }
  useEffect(() => {
    getTodoHandler();
  }, [userId]);
  // return <ul>{todos?.map((todo) => todo)}</ul>;
};

export default TodosList;
