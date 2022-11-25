import type { ComponentMeta, ComponentStory } from "@storybook/react";

import NavigationBarItem from "../NavigationBarItem";
import NavigationBar from "./navigation-bar.component";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <div style={{ height: "2048px" }}>
    <NavigationBar {...args}>
      <NavigationBarItem iconName="arrow-back" text="Voltar" />
      <NavigationBarItem iconName="list" text="Lista" />
      <NavigationBarItem iconName="comment" text="Comentar" />
      <NavigationBarItem
        iconName="more-horizontal"
        text="Mais"
        type="dropdown"
        isAbove={true}
        isRight={true}
        list={[
          {
            label: "Download PDF 1",
            leftIconName: "attach",
            href: "/1.pdf",
            target: "_blank",
          },
          {
            label: "Download PDF 2",
            leftIconName: "attach",
            href: "/2.pdf",
            target: "_blank",
          },
          {
            label: "Download PDF 3",
            leftIconName: "attach",
            href: "/3.pdf",
            target: "_blank",
          },
        ]}
      />
      <NavigationBarItem iconName="arrow-back" text="Próximo" />
    </NavigationBar>
  </div>
);

const DefaultArgs = {};

export const Default = Template.bind({});
Default.args = DefaultArgs;
