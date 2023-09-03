import * as Accordion from "@radix-ui/react-accordion";
const AccordionRoot = ({ children }) => {
  return (
    <Accordion.Root className="rounded-md " type="single" collapsible>
      {children}
    </Accordion.Root>
  );
};

export default AccordionRoot;
