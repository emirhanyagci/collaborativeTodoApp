import { Button, Callout } from "@radix-ui/themes";
const UserRow = () => {
  return (
    <Callout.Root color="green">
      <Callout.Text className="flex items-center justify-between w-full">
        <span className="text-xl"> umutsirin</span> <Button>Add Friend</Button>
      </Callout.Text>
    </Callout.Root>
  );
};

export default UserRow;
