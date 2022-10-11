import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Display from "./display.component";
import { DisplaySizes } from "./display.types";

export default {
  title: "Typographies/Display",
  component: Display,
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "h1",
      description: "Permite trocar a tag h1, por exemplo: `h3` ao invés de `h1`",
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
      description: "Permite trocar a tag h1 por outros níveis: de 1 a 6",
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
  size: undefined,
  html: undefined,
  as: undefined,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { ...DefaultArgs, html: "<i>#PartiuEstudar</i>" };

export const SizeSmall = Template.bind({});
SizeSmall.args = { ...DefaultArgs, size: DisplaySizes.Small };

export const SizeMedium = Template.bind({});
SizeMedium.args = { ...DefaultArgs, size: DisplaySizes.Medium };

export const SizeLarge = Template.bind({});
SizeLarge.args = { ...DefaultArgs, size: DisplaySizes.Large };
