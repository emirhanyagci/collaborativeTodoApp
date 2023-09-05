import * as Accordion from "@radix-ui/react-accordion";
const AccordionRoot = ({ children, onValueChange }) => {
  return (
    <Accordion.Root
      onValueChange={onValueChange}
      className="rounded-md "
      type="single"
      collapsible
    >
      {children}
    </Accordion.Root>
  );
};

export default AccordionRoot;
