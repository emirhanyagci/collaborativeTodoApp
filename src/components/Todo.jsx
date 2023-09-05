import { Callout, Button } from "@radix-ui/themes";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
const Todo = ({ children, isManageable = false }) => {
  const { deleteTodoHandler } = useDeleteTodo();
  return (
    <li>
      <Callout.Root>
        <Callout.Text className="flex justify-between items-center w-full">
          {children}
          {isManageable && (
            <Button
              onClick={() => deleteTodoHandler(children)}
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
