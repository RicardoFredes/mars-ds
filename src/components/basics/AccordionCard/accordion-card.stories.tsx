import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "@/components/typographics/Text";

import AccordionCard from "./accordion-card.component";
import { AccordionCardElevations } from "./accordion-card.types";

export default {
  title: "Components/Accordion/AccordionCard",
  component: AccordionCard,
  argTypes: {
    elevation: {
      options: AccordionCardElevations,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof AccordionCard>;

const Template: ComponentStory<typeof AccordionCard> = (args) => <AccordionCard {...args} />;

const DefaultArgs = {
  title: "Quem é o Me Salva!?",
  children: (
    <Text>
      Somos um cursinho online com FOCO em APROVAÇÃO e já impactamos milhares de estudantes. Desde
      2012 já são mais de 100 mil clientes satisfeitos, 300 milhões de aulas assistidas e 50 milhões
      de exercícios resolvidos, o que faz de nós especialistas em aprovação. Todos os anos, o nosso
      número de aprovados não para de crescer.
    </Text>
  ),
  elevation: AccordionCardElevations.XLow,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  ...DefaultArgs,
  defaultOpen: true,
};

export const DefaultFooterChildren = Template.bind({});
DefaultFooterChildren.args = {
  ...DefaultArgs,
  footerChildren: "Footer",
};

const FooterComponent = () => <Text style={{ color: "red" }}>Non Default Footer Children</Text>;

export const NonDefaultFooterChildren = Template.bind({});
NonDefaultFooterChildren.args = {
  ...DefaultArgs,
  footerComponent: FooterComponent,
};
