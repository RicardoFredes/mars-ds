import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { commonStoreComponentProps } from "@/services/stories";

import Image from "./image.component";

const myStoryFunctionDescription =
  'This Image component was designed to support advanced uses. You can just use it as if it were an "img" tag or pass more specific arguments to define different images in the dark theme. Furthermore it is possible to specify different arguments for different screen sizes.';

const commonArgs = {
  width: {
    description: "The image width",
    control: "number",
    type: { name: "number", required: false },
  },
  height: {
    description: "The image height",
    control: "number",
  },
  src: {
    description: "The default url source image",
    control: "text",
  },
  darkModeSrc: {
    description: "The url source image for darkmode theme",
    control: "text",
  },
};

const getResolutionDescription = (resolution: string) => {
  const args = Object.keys(commonArgs).join(", ");
  return `The above "${resolution}" resolution attributes for: ${args}`;
};

export default {
  title: "Components/Image",
  parameters: {
    docs: {
      storyDescription: myStoryFunctionDescription,
    },
    loki: { skip: true },
  },
  component: Image,
  argTypes: {
    title: {
      description: "The title and alt attribute image",
      control: "text",
    },
    autoDarkMode: {
      description: "Invert this image when it is true",
      control: "boolean",
      defaultValue: false,
    },
    maxHeight: {
      description: "The image max-height style",
      control: "number",
    },
    ...commonArgs,
    sm: {
      description: getResolutionDescription("sm"),
      control: "object",
      ...commonArgs,
    },
    md: {
      description: getResolutionDescription("md"),
      control: "object",
      ...commonArgs,
    },
    lg: {
      description: getResolutionDescription("lg"),
      control: "object",
      ...commonArgs,
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

const commonImageArgs = {
  width: undefined,
  height: undefined,
  src: undefined,
  darkModeSrc: undefined,
};

const DefaultArgs = {
  title: "Imagem de exemplo",
  width: 438.7,
  height: 400,
  src: "https://cdn.mesalva.com/uploads/image/MjAyMi0wNS0yNyAxNzo1NTozMiArMDAwMDYzODU5Mw%3D%3D%0A.png",
  darkModeSrc:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0wNS0yNyAxNzo1NTozMiArMDAwMDYzODU5Mw%3D%3D%0A.png",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const ScreenSizes = Template.bind({});
ScreenSizes.args = {
  ...DefaultArgs,
  sm: commonImageArgs,
  md: commonImageArgs,
  lg: commonImageArgs,
};
