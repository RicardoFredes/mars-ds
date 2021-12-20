import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "../Card";
import Accordion from "./";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} style={{ maxWidth: 320 }} />
);

const DefaultArgs = {
  title: "Título",
  children: (
    <>
      <p> Aqui pode ser colocado qualquer informação </p>
      <img height={320} src="https://via.placeholder.com/450x320" alt="texto" />
    </>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithCard: ComponentStory<typeof Accordion> = (args) => (
  <Card style={{ maxWidth: 320 }}>
    <Accordion {...args} />
  </Card>
);
WithCard.args = {
  ...DefaultArgs,
  title: "With Card",
};
