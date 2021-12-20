import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./";
import { AvatarSizes } from "./avatar.types";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: AvatarSizes,
      control: { type: "select" },
    },
    thumbnail: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const TemplateList: ComponentStory<typeof Avatar> = (args) => {
  return (
    <div className="flex align-items-center">
      {Object.values(AvatarSizes)
        .reverse()
        .map((size) => (
          <Avatar key={size} {...args} size={size} style={{ marginRight: 40 }} />
        ))}
    </div>
  );
};

const DefaultArgs = {
  name: "Ricardo Fredes",
  size: AvatarSizes.XLarge,
  thumbnail: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Thumbnail = TemplateList.bind({});
Thumbnail.args = DefaultArgs;

export const Letter = TemplateList.bind({});
Letter.args = { ...DefaultArgs, thumbnail: undefined };
