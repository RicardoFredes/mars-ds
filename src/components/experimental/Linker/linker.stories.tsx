import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type React from "react";

import Link from "@/components/basics/Link";

import Linker from "./linker.component";

export default {
  title: "Experimental/Linker",
  component: Linker,
  argTypes: {},
  parameters: {
    loki: { skip: true },
  },
} as ComponentMeta<typeof Linker>;

const Template: ComponentStory<typeof Linker> = () => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log("handleClick");
  };
  const ComponentLink = ({ children, ...props }: any) => (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
  return (
    <Linker ComponentLink={ComponentLink}>
      <Link href="#">Exemplo de link</Link>
    </Linker>
  );
};

export const Default = Template.bind({});
