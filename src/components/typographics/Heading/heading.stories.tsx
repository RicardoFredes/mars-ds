import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from ".";
import { HeadingSizesEnum } from "./heading.types";

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
      options: HeadingSizesEnum,
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
  size: HeadingSizesEnum.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const TemplateList: ComponentStory<typeof Heading> = (args) => {
  const sizes = Object.values(HeadingSizesEnum).reverse();
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
