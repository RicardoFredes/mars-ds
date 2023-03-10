import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { CardProps } from "./card.types";

import Button from "@/components/basics/Button";
import Caption from "@/components/typographies/Caption";
import Heading, { HeadingSizes } from "@/components/typographies/Heading";
import Text, { TextSizes } from "@/components/typographies/Text";
import Tokens from "@/tokens";

import Card from "./card.component";
import { CardElevations } from "./card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      options: Object.values(CardElevations),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} style={{ maxWidth: 360 }} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>
      Pulvinar tortor quisque eget in. Risus vitae, purus bibendum amet, et diam. Arcu ac at viverra
      etiam amet augue tristique non, pellentesque.
    </p>
  ),
};

export const Example: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} style={{ maxWidth: 360 }}>
    <div>
      <Heading size={HeadingSizes.XSmall} style={{ marginBottom: Tokens.SpacingXs }}>
        4 correções de redação
        <br />
        básicas extras
      </Heading>
      <Text size={TextSizes.Small} style={{ color: Tokens.ColorTextSecondary }}>
        + R$ 29,90
      </Text>
    </div>
    <div style={{ padding: "24px 0" }}>
      <Text size={TextSizes.Small}>
        Orci sagittis eget suspendisse in vitae nulla aliquet egestas. Id purus sit lectus elit
        turpis augue cras. Ac elit sagittis integer malesuada.
      </Text>
      <Text size={TextSizes.Small}>
        Pulvinar tortor quisque eget in. Risus vitae, purus bibendum amet, et diam. Arcu ac at
        viverra etiam amet augue tristique non, pellentesque.
      </Text>
    </div>
    <div>
      <Button style={{ width: "100%" }}>Adicionar à compra</Button>
    </div>
  </Card>
);
Example.args = {
  elevation: CardElevations.XLow,
};

const TemplateList: ComponentStory<typeof Card> = (args: CardProps) => {
  const elevations = Object.entries(CardElevations);
  return (
    <div>
      {elevations.map(([name, elevation], key) => (
        <div key={key} style={{ marginBottom: 24, maxWidth: 400 }}>
          <Card {...args} elevation={elevation}>
            <Caption>Card elevation</Caption>
            <Text>
              {name}: {elevation}
            </Text>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Elevations = TemplateList.bind({});
