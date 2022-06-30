import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonVariants } from "../Button";
import Embed from "./embed.component";
import { EmbedSizes } from "./embed.types";

export default {
  title: "Components/Embed",
  component: Embed,
  argTypes: {
    src: {
      control: {
        type: "text",
      },
      description: "Embedded media link",
    },
    type: {
      control: {
        type: "text",
      },
      defaultValue: "application/pdf",
      description:
        "Media Types of the media embedded in the page. For examples, go <a href='https://www.iana.org/assignments/media-types/media-types.xhtml' target='_blank'>Media Types List from IANA</a>",
    },
    variantButton: {
      control: {
        type: "select",
      },
      defaultValue: ButtonVariants.Primary,
      description: "Button appearance variation",
      options: Object.values(ButtonVariants),
    },
    target: {
      control: {
        type: "text",
      },
      description: "The target attribute specifies where to open the linked document",
      defaultValue: "_target",
    },
    textButton: {
      control: {
        type: "text",
      },
      description: "Text inside the button",
      defaultValue: "Baixar arquivo",
    },
    size: {
      control: {
        type: "select",
      },
      description:
        "Defines the size and orientation of the box which is used to represent a element",
      options: Object.values(EmbedSizes),
      defaultValue: EmbedSizes.Default,
    },
    messageDownload: {
      control: {
        type: "text",
      },
      defaultValue:
        "Se você não consegue visualizar este documento, clique no botão abaixo e faça download!",
      description: "Message that appears in the mobile layout",
    },
  },
} as ComponentMeta<typeof Embed>;

const Template: ComponentStory<typeof Embed> = (args) => <Embed {...args} />;

const DefaultArgs = {
  src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const PdfError = Template.bind({});
PdfError.args = {
  ...DefaultArgs,
  src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-.pdf",
};
