import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading, { HeadingSizes } from ".";

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
      {sizes.map((size, index) => (
        <Template key={size} size={size} style={{ marginBottom: 24 }} {...args}>
          h{index + 1} - Heading {size}
        </Template>
      ))}
    </div>
  );
};

export const Sizes = TemplateList.bind({});
Sizes.args = { level: 1 };
