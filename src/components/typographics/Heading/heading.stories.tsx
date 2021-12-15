import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from ".";
import { HeadingSizes } from "./heading.types";

export default {
  title: "Typographics/Heading",
  component: Heading,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
    },
    size: {
      options: HeadingSizes,
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

const DefaultArgs = {
  level: 1,
  children: "Heading",
  size: HeadingSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const TemplateList: ComponentStory<typeof Heading> = (args) => {
  const sizes = Object.values(HeadingSizes).reverse();
  return (
    <div>
      {sizes.map((size) => (
        <Template key={size} size={size} style={{ marginBottom: 24 }} {...args}>
          Heading size: {size}
        </Template>
      ))}
    </div>
  );
};

export const Sizes = TemplateList.bind({});
Sizes.args = { level: 1 };
