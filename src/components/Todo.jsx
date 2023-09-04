import { Callout, Button } from "@radix-ui/themes";

const Todo = ({ children, isManageable = false }) => {
  return (
    <li>
      <Callout.Root>
        <Callout.Text className="flex justify-between items-center w-full">
          {children}
          {isManageable && (
            <Button color="crimson" variant="soft" size="2">
              Delete
            </Button>
          )}
        </Callout.Text>
      </Callout.Root>
    </li>
  );
};

export default Todo;
