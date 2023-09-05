import { TextField, Button } from "@radix-ui/themes";
import { useState } from "react";
import { useNewTodo } from "../hooks/useNewTodo";
const NewTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodoHandler } = useNewTodo();
  return (
    <div className="flex items-center gap-5">
      <TextField.Root className="w-full">
        <TextField.Input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full"
          placeholder="Enter your todo"
          size="3"
        />
      </TextField.Root>
      <Button onClick={() => addTodoHandler(todo)}>Add Todo</Button>
    </div>
  );
};

export default NewTodo;
