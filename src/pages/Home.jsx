import { Container } from "@radix-ui/themes";
import { cutNameFromEmail } from "../utils/helper";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodosList";

import { useSelector } from "react-redux";
import HomeTabs from "../components/HomeTabs";

import { useTodos } from "../hooks/useTodos";
const Home = () => {
  const user = useSelector((state) => state.user);
  const { todos } = useTodos(user.id);
  return (
    <Container size="2">
      <div className="bg-black/10 p-5">
        <div className="space-y-3">
          <div>{user.email && cutNameFromEmail(user.email)} (you)</div>
          <div>
            <NewTodo />
          </div>

          <div>
            <TodoList todos={todos} isManageable />
          </div>
        </div>
        <HomeTabs />
      </div>
    </Container>
  );
};

export default Home;
