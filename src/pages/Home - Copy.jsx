import * as Accordion from "@radix-ui/react-accordion";
import { Container } from "@radix-ui/themes";

const Home = () => {
  return (
    <Container size="1">
      <Accordion.Root
        className="bg-gray-500/20 border-2 border-gray-950 rounded-md"
        type="single"
        collapsible
      >
        <Accordion.Item className="AccordionItem" value="item-1">
          <Accordion.Trigger className="AccordionTrigger">
            emirhanyagci
          </Accordion.Trigger>
          <Accordion.Content className="AccordionContent">
            amsd;lsad
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </Container>
  );
};

export default Home;
