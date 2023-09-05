import { useQuery } from "react-query";
import { getTodos } from "../services/apiUsers";
import TodosList from "./TodosList";
import { useState } from "react";
const AccordionContent = ({ friendId }) => {
  const [currentTodos, setCurrentTodos] = useState([]);
  useQuery({
    queryKey: ["friendsTodos"],
    queryFn: () => getTodos(friendId),
    onSuccess(data) {
      setCurrentTodos(data);
    },
  });
  return <TodosList todos={currentTodos} />;
};

export default AccordionContent;
