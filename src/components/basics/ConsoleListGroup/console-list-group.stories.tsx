import type { ConsoleListGroupProps } from "./console-list-group.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ConsoleListGroup from "./console-list-group.component";

export default {
  title: "Components/Console/ConsoleListGroup",
  component: ConsoleListGroup,
  argTypes: {},
} as ComponentMeta<typeof ConsoleListGroup>;

const Template: ComponentStory<typeof ConsoleListGroup> = (args) => <ConsoleListGroup {...args} />;

const DefaultArgs: ConsoleListGroupProps = {
  title: "Item de console",
  subtitle: "99 questões",
  LinkComponent: "a",
  iconName: "edit",
  list: [
    { title: "Item de console" },
    { title: "Item de console", isAnswered: true },
    { title: "Item de console", isAnswered: true },
    { title: "Item de console", isAnswered: true },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
