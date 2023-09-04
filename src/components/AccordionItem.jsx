import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cutNameFromEmail } from "../utils/helper";
import TodosList from "./TodosList";
const AccordionItem = ({ email, todos }) => {
  return (
    <Accordion.Item
      className="AccordionItem  border-2 p-5 border-gray-950 rounded-md"
      value={email}
    >
      <Accordion.Trigger className="AccordionTrigger w-full">
        <div className="flex items-center justify-between">
          <span className="text-lg"> {cutNameFromEmail(email)}</span>
          <ChevronDownIcon className="AccordionIcon w-5 h-5 rotate-0 transition-all duration-300" />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="AccordionContent ">
        <TodosList todos={todos} />
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default AccordionItem;
