import { Callout, Button } from "@radix-ui/themes";

const Todo = () => {
  return (
    <Callout.Root>
      <Callout.Text className="flex justify-between items-center w-full">
        You will need admin privileges to install and access this application.
        <Button color="crimson">Delete</Button>
      </Callout.Text>
    </Callout.Root>
  );
};

export default Todo;
