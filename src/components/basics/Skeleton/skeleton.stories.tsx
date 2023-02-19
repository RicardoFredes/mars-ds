import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Heading from "@/components/typographies/Heading";
import Text from "@/components/typographies/Text";

import Avatar from "../Avatar";
import Button from "../Button";
import Card from "../Card";
import Skeleton from "./skeleton.component";
import { SkeletonVariants } from "./skeleton.types";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {
    height: {
      control: { type: "number" },
    },
    width: {
      control: { type: "number" },
    },
    variant: {
      control: { type: "select", options: Object.values(SkeletonVariants) },
      defaultValue: "line",
    },
  },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

const DefaultArgs = {
  active: true,
  children: "Texto a ser carregado de modo assíncrona",
  variant: SkeletonVariants.Default,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Circle = Template.bind({});
Circle.args = {
  ...DefaultArgs,
  variant: SkeletonVariants.Circle,
  height: 40,
  width: 40,
  children: "",
};

export const Rectangle = Template.bind({});
Rectangle.args = {
  ...DefaultArgs,
  variant: SkeletonVariants.Default,
  height: 118,
  width: 210,
  children: "",
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  ...DefaultArgs,
  variant: SkeletonVariants.Paragraph,
};

export const ExampleOfUsage: ComponentStory<typeof Skeleton> = (args) => (
  <Card elevation="lw" style={{ maxWidth: 280 }}>
    <Skeleton className="mb-lg" {...Circle.args} active={args.active}>
      <Avatar
        size="xl"
        thumbnail="https://avatars.githubusercontent.com/u/63628013?s=400&u=44c18119a74b11541d1f385093bbcf7d6eb96b03&v=4"
      />
    </Skeleton>
    <Skeleton className="mb-lg" {...DefaultArgs} height={24} active={args.active}>
      <Heading size="sm">Atualize o seu perfil</Heading>
    </Skeleton>
    <Skeleton className="mb-lg" {...Paragraph.args} active={args.active}>
      <Text size="sm">
        Manter o perfil atualizado é importante, pois é por meio dele que planejamos os seus
        estudos.
      </Text>
    </Skeleton>
    <Skeleton active={args.active}>
      <Button>Ver Meu Perfil</Button>
    </Skeleton>
  </Card>
);

ExampleOfUsage.args = {
  active: true,
};
