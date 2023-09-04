import { Callout, Button } from "@radix-ui/themes";
import { deleteTodo } from "../services/apiUsers";
const Todo = ({ children, isManageable = false }) => {
  return (
    <li>
      <Callout.Root>
        <Callout.Text className="flex justify-between items-center w-full">
          {children}
          {isManageable && (
            <Button
              onClick={() => deleteTodo(children)}
              color="crimson"
              variant="soft"
              size="2"
            >
              Delete
            </Button>
          )}
        </Callout.Text>
      </Callout.Root>
    </li>
  );
};

export default Todo;
