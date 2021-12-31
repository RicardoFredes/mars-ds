import { ButtonSizes, ButtonVariants } from "@/components/basics/Button";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useState } from "react";
import SubmitButton from "./";

export default {
  title: "Forms/SubmitButton",
  component: SubmitButton,
  argTypes: {
    variant: {
      options: ButtonVariants,
      control: { type: "select" },
    },
    size: {
      options: ButtonSizes,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof SubmitButton>;

const Template: ComponentStory<typeof SubmitButton> = (args) => <SubmitButton {...args} />;

const InteractiveTemplate: ComponentStory<typeof SubmitButton> = (args) => {
  const [submitting, setSubmitting] = useState(args.submitting);

  useEffect(() => {
    setSubmitting(args.submitting);
  }, [args.submitting]);

  const handleClick = () => {
    setSubmitting(true);
    setTimeout(() => setSubmitting(false), 1000);
  };
  return <SubmitButton {...args} onClick={handleClick} submitting={submitting} />;
};

const DefaultArgs = {
  children: "Enviar",
  submitting: false,
  variant: ButtonVariants.Primary,
  size: ButtonSizes.Medium,
  disabled: false,
};

export const Default = InteractiveTemplate.bind({});
Default.args = DefaultArgs;

export const Submitting = Template.bind({});
Submitting.args = { ...DefaultArgs, submitting: true, disabled: true };
