import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Display from "./display.component";
import { DisplaySizes } from "./display.types";

export default {
  title: "Typographics/Display",
  component: Display,
  argTypes: {
    as: {
      description: "A tag na qual o elemento vai se transformar",
      control: { type: "text" },
      defaultValue: "",
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(DisplaySizes),
      control: {
        type: "select",
      },
    },
    html: {
      description: "The HTML content of the display",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Display>;

const Template: ComponentStory<typeof Display> = (args) => <Display {...args} />;

const DefaultArgs = {
  level: 1,
  children: "Display",
  size: DisplaySizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const TemplateList: ComponentStory<typeof Display> = (args) => {
  const sizes = Object.values(DisplaySizes).reverse();
  return (
    <div>
      {sizes.map((size, index) => (
        <Template key={size} size={size} style={{ marginBottom: 24 }} {...args}>
          h{index + 1} - Display {size}
        </Template>
      ))}
    </div>
  );
};

export const Sizes = TemplateList.bind({});
Sizes.args = { level: 1 };

export const WithHtml = Template.bind({});
WithHtml.args = { html: "Partiu <u>estudar</u>!" };
