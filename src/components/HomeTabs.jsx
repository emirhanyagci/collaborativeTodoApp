import * as Tabs from "@radix-ui/react-tabs";
import AccordionRoot from "../components/AccordionRoot";
import AccordionItem from "../components/AccordionItem";
import UserRow from "./UserRow";
const HomeTabs = () => {
  return (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List className=" flex justify-between mt-3 rounded-md">
        <Tabs.Trigger
          className="w-1/2 p-2 rounded-md data-[state=active]:bg-gray-900/10"
          value="tab1"
        >
          Friend Todos
        </Tabs.Trigger>
        <Tabs.Trigger
          className="w-1/2 p-2 rounded-md data-[state=active]:bg-gray-900/10"
          value="tab2"
        >
          Add Friends
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="py-3" value="tab1">
        <AccordionRoot>
          <AccordionItem />
        </AccordionRoot>
      </Tabs.Content>
      <Tabs.Content className="py-3 flex flex-wrap " value="tab2">
        <div className="w-full">
          <UserRow />
        </div>
      </Tabs.Content>
      <Tabs.Content />
    </Tabs.Root>
  );
};

export default HomeTabs;
