import UserRow from "./UserRow";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "../services/apiUsers";

const AddFriends = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  async function getUserHandler() {
    setUsers(await getUsers());
  }
  useEffect(() => {
    getUserHandler();
  }, []);
  return (
    <div className="w-full">
      {users.map(({ userId, email }) =>
        user.email !== email ? (
          <UserRow key={userId} userId={userId} email={email} />
        ) : null
      )}
    </div>
  );
};

export default AddFriends;
