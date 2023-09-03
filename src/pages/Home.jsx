import { Container } from "@radix-ui/themes";
import AccordionRoot from "../components/AccordionRoot";
import AccordionItem from "../components/AccordionItem";
import NewTodo from "../components/NewTodo";
import Todo from "../components/Todo";

const Home = () => {
  return (
    <Container size="2">
      <div className="bg-black/10 p-5">
        <div className="space-y-3">
          <div>emirhanyagci (you)</div>
          <div>
            <NewTodo />
          </div>

          <div>
            <Todo />
          </div>
        </div>
        <AccordionRoot>
          <AccordionItem />
        </AccordionRoot>
      </div>
    </Container>
  );
};

export default Home;
