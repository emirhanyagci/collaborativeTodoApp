import { useQuery } from "react-query";
import { getUsers } from "../services/apiUsers";

export function useUsers() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  return { users };
}
