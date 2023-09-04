import { Container } from "@radix-ui/themes";

import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodosList";

import { useSelector } from "react-redux";
import HomeTabs from "../components/HomeTabs";
const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container size="2">
      <div className="bg-black/10 p-5">
        <div className="space-y-3">
          <div>emirhanyagci (you)</div>
          <div>
            <NewTodo />
          </div>

          <div>
            <TodoList userId={user.id} isManageable />
          </div>
        </div>
        <HomeTabs />
      </div>
    </Container>
  );
};

export default Home;
