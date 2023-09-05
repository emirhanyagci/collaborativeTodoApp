import { getTodos } from "../services/apiUsers";
import { useQuery } from "react-query";
export function useTodos(id) {
  const { data: todos } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(id),
  });

  return { todos };
}
