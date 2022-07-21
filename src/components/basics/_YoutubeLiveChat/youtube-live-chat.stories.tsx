import type { ComponentMeta, ComponentStory } from "@storybook/react";

import YouTubeLiveChat from "./youtube-live-chat.component";

export default {
  title: "Components/YouTubeLiveChat",
  component: YouTubeLiveChat,
  argTypes: {
    domain: {
      control: {
        type: "text",
      },
      defaultValue: "mesalva.com",
      description: "The domain used on the chat display site, example mesalva.com",
    },
    height: {
      control: {
        type: "text",
      },
      defaultValue: "380px",
      description: "The height attribute specifies the height of the element",
    },
    messageError: {
      control: {
        type: "text",
      },
      defaultValue: "Não foi possível estabelecer conexão com o chat",
      description: "Message displayed when having an error",
    },
    messageMobile: {
      control: {
        type: "text",
      },
      defaultValue: "Não é possível exibir o chat em dispositivos móveis",
      description: "Message displayed on mobile devices",
    },
    src: {
      control: {
        type: "text",
      },
      description: "Custom video link for chat display",
    },
    videoId: {
      control: {
        type: "text",
      },
      description: "Video Id for chat display",
    },
    width: {
      control: {
        type: "text",
      },
      defaultValue: "100%",
      description: "The width attribute specifies the width of the element",
    },
  },
  parameters: {
    // TODO: Fix visual regression
    loki: { skip: true },
  },
} as ComponentMeta<typeof YouTubeLiveChat>;

const Template: ComponentStory<typeof YouTubeLiveChat> = (args) => <YouTubeLiveChat {...args} />;

const DefaultArgs = {
  domain: "mesalva.com",
  height: "380px",
  messageError: "Não foi possível estabelecer conexão com o chat",
  messageMobile: "Não é possível exibir o chat em dispositivos móveis",
  videoId: "pvT33QhdfpU",
  width: "100%",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  messageError: "Não foi possível estabelecer conexão com o chat",
  videoId: "",
};
