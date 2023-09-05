import { useQuery, useQueryClient } from "react-query";
import { getTodos } from "../services/apiUsers";
import TodosList from "./TodosList";
import { useState } from "react";
import { testX } from "../services/apiUsers";
const AccordionContent = ({ friendId }) => {
  const [currentTodos, setCurrentTodos] = useState([]);
  testX();
  const { data: todos, isSuccess } = useQuery({
    queryKey: ["friendsTodos"],
    queryFn: () => getTodos(friendId),
    onSuccess(data) {
      setCurrentTodos(data);
    },
  });
  return <TodosList todos={currentTodos} />;
};

export default AccordionContent;
