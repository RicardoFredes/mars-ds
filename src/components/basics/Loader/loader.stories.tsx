import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Text, { TextSizes } from "@/components/typographics/Text";

import Loader from "./loader.component";
import { LoaderSizes } from "./loader.types";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    size: {
      options: LoaderSizes,
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;
const SizesList: ComponentStory<typeof Loader> = (args) => {
  return (
    <div>
      {Object.entries(LoaderSizes).map(([key, size]) => (
        <div key={key} className="flex align-items-center gap-xl mb-xl">
          <Text style={{ minWidth: 96 }} size={TextSizes.Small} className="text-right">
            <strong>Size: </strong>
            {key}
          </Text>
          <Loader key={size} {...args} size={size} />
        </div>
      ))}
    </div>
  );
};

const DefaultArgs = {
  size: LoaderSizes.Small,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Sizes = SizesList.bind({});
Sizes.args = DefaultArgs;
