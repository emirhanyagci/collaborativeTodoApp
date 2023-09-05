import AccordionRoot from "../components/AccordionRoot";
import AccordionItem from "../components/AccordionItem";
import { useEffect, useState } from "react";
import { getFriends } from "../services/apiUsers";
const FriendTodos = () => {
  const [friends, setFriends] = useState([]);
  async function getTodosHandler() {
    getFriends().then((friends) => {
      if (friends.length) setFriends(friends);
    });
  }
  useEffect(() => {
    getTodosHandler();
  }, []);
  return (
    <div className="w-full">
      <AccordionRoot>
        <div className="space-y-3">
          {friends.map(({ friendId, email }) => (
            <AccordionItem key={friendId} friendId={friendId} email={email} />
          ))}
        </div>
      </AccordionRoot>
    </div>
  );
};

export default FriendTodos;
