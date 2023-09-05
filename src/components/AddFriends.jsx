import UserRow from "./UserRow";
import { useSelector } from "react-redux";
import { useUsers } from "../hooks/useUsers";

const AddFriends = () => {
  const user = useSelector((state) => state.user);
  const { users } = useUsers();
  return (
    <div className="w-full space-y-3">
      {users?.map(({ userId, email }) =>
        user.email !== email ? (
          <UserRow key={userId} userId={userId} email={email} />
        ) : null
      )}
    </div>
  );
};

export default AddFriends;
