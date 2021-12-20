import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { AccordionCard, Text } from "@/index";

export default {
  title: "Components/Accordion/AccordionCard",
  component: AccordionCard,
  argTypes: {},
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
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
