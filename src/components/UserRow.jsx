import { cutNameFromEmail } from "../utils/helper";
import { Button, Callout } from "@radix-ui/themes";
import { addFriend } from "../services/apiUsers";
const UserRow = ({ userId, email }) => {
  return (
    <Callout.Root color="green">
      <Callout.Text className="flex items-center justify-between w-full">
        <span className="text-xl"> {cutNameFromEmail(email)}</span>
        <Button
          onClick={() => {
            addFriend(userId);
          }}
        >
          Add Friend
        </Button>
      </Callout.Text>
    </Callout.Root>
  );
};

export default UserRow;
