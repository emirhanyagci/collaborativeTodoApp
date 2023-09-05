import AccordionRoot from "../components/AccordionRoot";
import AccordionItem from "../components/AccordionItem";
import { useState } from "react";
import { useFriends } from "../hooks/useFriends";
const FriendTodos = () => {
  const { friends } = useFriends();
  const [currentFriend, setCurrentFriend] = useState("");

  return (
    <div className="w-full">
      <AccordionRoot onValueChange={(email) => setCurrentFriend(email)}>
        <div className="space-y-3">
          {friends?.map(({ friendId, email }) => (
            <AccordionItem
              currentFriend={currentFriend}
              key={friendId}
              friendId={friendId}
              email={email}
            />
          ))}
        </div>
      </AccordionRoot>
    </div>
  );
};

export default FriendTodos;
