import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "@/components/typographics/Text";

import Accordion from "./accordion.component";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} style={{ maxWidth: 320 }} />
);

const DefaultArgs = {
  title: "Quando começam as aulas?",
  children: (
    <Text>
      Você pode começar a estudar assim que adquirir o seu plano, uma vez que terá acesso
      imediatamente após a aprovação da sua compra. Lembre que o quanto antes você começar a
      estudar, mais tempo terá para cobrir o conteúdo cobrado na prova, fazer exercícios e revisar a
      matéria.
    </Text>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  ...DefaultArgs,
  defaultOpen: true,
};
