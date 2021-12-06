import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "./checkbox.component";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Concordo com os termos de uso",
  defaultChecked: false,
  disabled: false,
  id: "checkbox",
};
