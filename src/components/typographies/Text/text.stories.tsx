import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "./text.component";
import { TextSizes } from "./text.types";

export default {
  title: "Typographies/Text",
  component: Text,
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "p",
      description: "Permite trocar a tag p, por exemplo: `h1` ao invés de `p`",
    },
    size: {
      options: Object.values(TextSizes),
      control: {
        type: "select",
      },
    },
    children: {
      description: "The content of the text",
      control: { type: "text" },
      defaultValue: "",
    },
    html: {
      description: "The HTML content of the text",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const DefaultArgs = {
  children: "Text",
  size: undefined,
  html: "",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = {
  ...DefaultArgs,
  children: "",
  html: "Quem estuda com o Me Salva! tem <b>muitos benefícios</b>",
};

export const Size_XSmall = Template.bind({});
Size_XSmall.args = { ...DefaultArgs, size: TextSizes.XSmall };

export const Size_Small = Template.bind({});
Size_Small.args = { ...DefaultArgs, size: TextSizes.Small };

export const Size_Medium = Template.bind({});
Size_Medium.args = { ...DefaultArgs, size: TextSizes.Medium };

export const Size_Large = Template.bind({});
Size_Large.args = { ...DefaultArgs, size: TextSizes.Large };

export const Size_XLarge = Template.bind({});
Size_XLarge.args = { ...DefaultArgs, size: TextSizes.XLarge };

export const Size_XXLarge = Template.bind({});
Size_XXLarge.args = { ...DefaultArgs, size: TextSizes.XXLarge };
