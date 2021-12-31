import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "../TextField";
import FormWithSubmitButton from "./";

export default {
  title: "Forms/FormWithSubmitButton",
  component: FormWithSubmitButton,
  argTypes: {},
} as ComponentMeta<typeof FormWithSubmitButton>;

const Template: ComponentStory<typeof FormWithSubmitButton> = (args) => (
  <FormWithSubmitButton {...args} />
);

const DefaultArgs = {
  disabled: false,
  submitButtonLabel: "Enviar",
  submitting: false,
  onSubmit: () => {
    alert("Dados enviados! ...Mentira");
  },
  children: (
    <>
      <TextField label="Nome" name="name" />
      <TextField label="Email" name="email" type="email" />
    </>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
