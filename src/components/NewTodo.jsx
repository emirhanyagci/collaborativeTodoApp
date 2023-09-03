import { TextField, Button } from "@radix-ui/themes";
import { addTodo } from "../services/apiUsers";
import { useState } from "react";
const NewTodo = () => {
  const [todo, setTodo] = useState("");
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
      <Button onClick={() => addTodo(todo)}>Add Todo</Button>
    </div>
  );
};

export default NewTodo;
