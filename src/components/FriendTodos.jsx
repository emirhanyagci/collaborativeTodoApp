import AccordionRoot from "../components/AccordionRoot";
import AccordionItem from "../components/AccordionItem";
import { useEffect, useState } from "react";
import { getEmail, getFriendsId, getTodos } from "../services/apiUsers";
const FriendTodos = () => {
  const [friends, setFriends] = useState([]);
  async function getTodosHandler() {
    const friendsId = await getFriendsId();
    if (!friendsId.length) return;
    let lastFriends = [];
    Promise.all(
      friendsId.map(async (friendId) => {
        const todos = await getTodos(friendId);
        const email = await getEmail(friendId);
        lastFriends.push({
          friendId,
          email,
          todos,
        });
      })
    ).then(() => {
      setFriends(lastFriends);
    });
  }
  console.log(friends);
  useEffect(() => {
    getTodosHandler();
  }, []);
  return (
    <div className="w-full">
      <AccordionRoot>
        <div className="space-y-3">
          {friends.map(({ friendId, email, todos }) => (
            <AccordionItem key={friendId} email={email} todos={todos} />
          ))}
        </div>
      </AccordionRoot>
    </div>
  );
};

export default FriendTodos;
