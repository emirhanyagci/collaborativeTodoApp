import { Container } from "@radix-ui/themes";
import { cutNameFromEmail } from "../utils/helper";
import NewTodo from "../components/NewTodo";
import TodoList from "../components/TodosList";

import { useSelector } from "react-redux";
import HomeTabs from "../components/HomeTabs";
import { useEffect, useState } from "react";
import { getTodos } from "../services/apiUsers";
const Home = () => {
  const [userTodos, setUserTodos] = useState([]);
  const user = useSelector((state) => state.user);

  async function getTodoHandler() {
    const fetchedTodos = await getTodos(user.id);
    setUserTodos(fetchedTodos);
  }
  useEffect(() => {
    if (user.id) getTodoHandler();
  }, [user.id]);
  return (
    <Container size="2">
      {user.id ? (
        <div className="bg-black/10 p-5">
          <div className="space-y-3">
            <div>{user.email && cutNameFromEmail(user.email)} (you)</div>
            <div>
              <NewTodo />
            </div>

            <div>
              <TodoList todos={userTodos} isManageable />
            </div>
          </div>
          <HomeTabs />
        </div>
      ) : (
        "Loading..."
      )}
    </Container>
  );
};

export default Home;
