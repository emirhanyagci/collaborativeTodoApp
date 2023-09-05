import { getTodos } from "../services/apiUsers";
import TodosList from "./TodosList";
import { useEffect, useState } from "react";
const AccordionContent = ({ friendId }) => {
  const [currentTodos, setCurrentTodos] = useState([]);
  useEffect(() => {
    getTodos(friendId).then((todos) => {
      setCurrentTodos(todos);
    });
  }, [friendId]);

  return <TodosList todos={currentTodos} />;
};

export default AccordionContent;
