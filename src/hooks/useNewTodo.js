import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../services/apiUsers";

export function useNewTodo() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: addTodoHandler } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return { isLoading, addTodoHandler };
}
