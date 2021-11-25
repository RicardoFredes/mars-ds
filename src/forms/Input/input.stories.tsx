import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./input.component";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Inactive = Template.bind({});
Inactive.args = {
  placeholder: "Digite o seu nome",
  name: "title",
  type: "text",
  label: "Nome"
};
