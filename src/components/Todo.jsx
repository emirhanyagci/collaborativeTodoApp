import { Callout, Button } from "@radix-ui/themes";

const Todo = ({ isManageable }) => {
  return (
    <li>
      <Callout.Root>
        <Callout.Text className="flex justify-between items-center w-full">
          You will need admin privileges to install and access this application.
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
