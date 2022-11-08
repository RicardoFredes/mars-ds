import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Heading from "@/components/typographies/Heading";

import NavigationBar from "./navigation-bar.component";
import { navigationBarMockedData } from "./navigation-bar.mock";

export default {
  title: "Components/NavigationBar",
  component: NavigationBar,
  subComponents: { Heading },
  argTypes: {},
} as ComponentMeta<typeof NavigationBar>;

const Spacing = () => <div style={{ height: "1024px" }}></div>;

const Template: ComponentStory<typeof NavigationBar> = (args) => (
  <>
    <Heading id="comments">Comentários</Heading>
    <Spacing />
    <Heading id="text">Texto</Heading>
    <Spacing />
    <Heading id="lessons">Aulas</Heading>
    <Spacing />
    <NavigationBar {...args} />
  </>
);

const DefaultArgs = navigationBarMockedData;

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Hiding_Text = Template.bind({});
Hiding_Text.args = { ...DefaultArgs, showText: false };
