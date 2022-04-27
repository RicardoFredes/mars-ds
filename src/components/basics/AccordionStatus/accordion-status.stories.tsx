import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { CardElevations } from "@/components/basics/Card";
import Text from "@/components/typographies/Text";

import AccordionStatus from "./accordion-status.component";
import { IconVariants } from "./accordion-status.types";

export default {
  title: "Components/Accordion/AccordionStatus",
  component: AccordionStatus,
  argTypes: {
    icon: {
      options: IconVariants,
      control: { type: "select" },
    },
    elevation: {
      options: CardElevations,
      control: { type: "select" },
    },
    footerChildren: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof AccordionStatus>;

const Template: ComponentStory<typeof AccordionStatus> = (args) => <AccordionStatus {...args} />;

const DefaultArgs = {
  children: (
    <Text>
      Você pode começar a estudar assim que adquirir o seu plano, uma vez que terá acesso
      imediatamente após a aprovação da sua compra. Lembre que o quanto antes você começar a
      estudar, mais tempo terá para cobrir o conteúdo cobrado na prova, fazer exercícios e revisar a
      matéria.
    </Text>
  ),
  title: "Accordion Status",
};
export const Default = Template.bind({});
Default.args = DefaultArgs;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  ...DefaultArgs,
  title: "Accordion Status Default Footer",
  footerChildren: "Padrão",
};

const FooterComponent = () => <Text style={{ color: "red" }}>Non Default Footer Children</Text>;

export const CustomizedFooter = Template.bind({});
CustomizedFooter.args = {
  ...DefaultArgs,
  title: "Accordion Status Customized Footer",
  footerComponent: FooterComponent,
};

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  ...DefaultArgs,
  defaultOpen: true,
};
