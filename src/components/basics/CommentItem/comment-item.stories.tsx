import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { commonStoreComponentProps } from "@/services/stories";

import CommentItem from "./comment-item.component";

export default {
  title: "Components/Comment/CommentItem",
  component: CommentItem,
  argTypes: {
    thumbnail: {
      description: "The src image",
      control: { type: "text" },
      defaultValue: "",
    },
    name: {
      description: "The user name",
      control: { type: "text" },
      defaultValue: "",
    },
    date: {
      description: "The date information as string",
      control: { type: "text" },
      defaultValue: "",
    },
    comment: {
      description: "The user comment",
      control: { type: "text" },
      defaultValue: "",
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

const DefaultArgs = {
  name: "Ricardo Fredes",
  date: "Ontem, 16:12",
  comment: "Estou me apaixonando, cada dia mais, pela matemática com essa família #PARTIUAPROVAR",
  thumbnail: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const VeryLongTextArgs = {
  name: "Ricardo Fredes",
  date: "Hoje, 20:21",
  comment:
    "Com a ajuda do Me Salva! consegui passar em 1º lugar em Psicologia na UFMT e nada melhor poderia ter acontecido! Estudar com esse time é ter certeza de que nunca estará sozinho na sua caminhada de estudos. A didática é maravilhosa, o suporte sempre atencioso e a plataforma fluída. O melhor cursinho online! Sempre fui péssima em redação, fiz ENEM outras 3x e sempre fiquei com notas entre 600 e 660. Tirar 860 foi um máximo para mim! Não tive que esperar para entrar na faculdade, pois fiquei em 1° lugar da 1ª chamada. Muito obrigada, de coração!! ❤",
  thumbnail: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
};

export const VeryLongText = Template.bind({});
VeryLongText.args = VeryLongTextArgs;

export const LongStringWithoutSpaces = Template.bind({});
LongStringWithoutSpaces.args = {
  ...DefaultArgs,
  comment:
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
};

const WithoutThumbnailArgs = {
  name: "Paulo Viticoski",
  date: "5 de maio, 18:42",
  comment:
    "Com a ajuda do Me Salva! consegui passar em 1º lugar em Psicologia na UFMT e nada melhor poderia ter acontecido!",
};

const WithLineBreaksArgs = {
  name: "Ricardo Fredes",
  date: "Hoje, 20:21",
  comment: `Parabéns adorei
 Abraços galera
 Boa semana!`,
  thumbnail: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
};

export const WithLineBreaks = Template.bind({});
WithLineBreaks.args = WithLineBreaksArgs;

export const WithoutThumbnail = Template.bind({});
WithoutThumbnail.args = WithoutThumbnailArgs;
