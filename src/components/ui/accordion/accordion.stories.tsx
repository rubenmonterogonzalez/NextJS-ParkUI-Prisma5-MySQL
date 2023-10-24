import React from "react";
import type { Story } from "@ladle/react";
// @ts-ignore
import { ChevronDownIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./index";
import { Icon } from "~/components/ui/icon";
export const accordion: Story = ({ children, ...props }: any) => {
  const items = ["React", "Solid", "Vue"];
  return (
    <Accordion defaultValue={["React"]} multiple {...props}>
      {items.map((item, id) => (
        <AccordionItem key={id} value={item}>
          {({ isOpen }) => (
            <>
              <AccordionTrigger>
                {item}
                <AccordionIcon isOpen={isOpen} />
              </AccordionTrigger>
              <AccordionContent>
                <div>
                  Pudding donut gummies chupa chups oat cake marzipan biscuit
                  tart. Dessert macaroon ice cream bonbon jelly. Jelly topping
                  tiramisu halvah lollipop.
                </div>
              </AccordionContent>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? "rotate(-180deg)" : undefined,
    transition: "transform 0.2s",
    transformOrigin: "center"
  };
  return (
    <Icon style={iconStyles}>
      <ChevronDownIcon />
    </Icon>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Accordion"
};
