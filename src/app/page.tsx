'use client'
import { ChevronDownIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/accordion"
import { Button } from "~/components/button";
import { Icon } from "~/components/icon";
import { css } from "~/styled-system/css"

export default function Home ({
  props,
  children
}: {
  props: any;
  children: any;
})  {
  const items = ["React", "Solid", "Vue"];
  return (
    <div className={css({})}>
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
      <Button>First</Button>
    </div>
  )
}





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
