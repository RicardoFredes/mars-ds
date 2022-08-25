import type { CommentItemProps } from "../CommentItem";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";

import { commonStoreComponentProps } from "@/services/stories";

import CommentList from "./comment-list.component";

export default {
  title: "Components/Comment/CommentList",
  component: CommentList,
  argTypes: {
    list: {
      description: "List of commentaries",
      control: { type: "array" },
      defaultValue: [],
    },
    showCommentBox: {
      description: "Show comment box",
      control: { type: "boolean" },
      defaultValue: false,
    },
    disabled: {
      description: "Disable add comment button",
      control: { type: "boolean" },
      defaultValue: false,
    },
    emptyMessage: {
      description: "The message to show if not has comments",
      control: { type: "text" },
      defaultValue: "",
    },
    info: {
      description: "The text info of the area field",
      control: { type: "text" },
      defaultValue: "",
    },
    error: {
      description: "The error of the area field: string or boolean",
      control: { type: "text" },
      defaultValue: "",
    },
    success: {
      description: "Success the area field",
      control: { type: "boolean" },
      defaultValue: false,
    },
    onComment: {
      description: "The callback promise function called on click add comment button",
      control: { type: "function" },
      action: "onComment",
    },
    comment: {
      description: "The external comment for textarea",
      control: { type: "text" },
      defaultValue: "",
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => {
  const [commentList, setCommentList] = useState<CommentItemProps[]>(args.list || []);
  const onComment = async (value: string) => {
    const comment = {
      name: "Mars Design System",
      date: "Hoje",
      comment: value,
    };
    setCommentList([comment, ...commentList]);
  };
  return <CommentList {...args} onComment={onComment} list={commentList} />;
};

const DefaultArgs = {
  disabled: false,
  error: false,
  list: [
    {
      name: "Rebeca",
      date: "25 de maio, 15:22",
      comment:
        "Só tenho a agradecer por toda a equipe de professores incríveis! Consegui passar em primeiro lugar para o curso que eu queria na federal, além de ter sido aprovada para engenharia de produção na UERJ e outros 4 cursos.",
    },
    {
      name: "Paulo Viticoski",
      date: "5 de maio, 18:42",
      comment:
        "Com a ajuda do Me Salva! consegui passar em 1º lugar em Psicologia na UFMT e nada melhor poderia ter acontecido!",
    },
    {
      name: "Ricardo Fredes",
      date: "Ontem, 16:12",
      comment:
        "Estou me apaixonando, cada dia mais, pela matemática com essa família #PARTIUAPROVAR",
      thumbnail: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const ShowCommentBox = Template.bind({});
ShowCommentBox.args = { ...DefaultArgs, showCommentBox: true };

export const WithComment = Template.bind({});
WithComment.args = {
  ...DefaultArgs,
  showCommentBox: true,
  comment: "Olá, eu tenho uma dúvida com relação...",
};

export const Disabled = Template.bind({});
Disabled.args = { ...DefaultArgs, disabled: true };

export const NoCommentary = Template.bind({});
NoCommentary.args = { ...DefaultArgs, list: [], emptyMessage: "Seja o primeiro a comentar" };
