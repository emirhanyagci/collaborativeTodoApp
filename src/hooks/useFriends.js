import { useQuery } from "react-query";
import { getFriends } from "../services/apiUsers";
export function useFriends() {
  const { data: friends } = useQuery({
    queryKey: ["friends"],
    queryFn: getFriends,
  });

  return { friends };
}
