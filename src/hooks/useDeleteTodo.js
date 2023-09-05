import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../services/apiUsers";

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteTodoHandler } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  return { isLoading, deleteTodoHandler };
}
