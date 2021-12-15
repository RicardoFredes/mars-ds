import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./";
import Text from "@/components/typographics/Text";
import Heading from "@/components/typographics/Heading";
import { HeadingSizes } from "@/components/typographics/Heading/heading.types";
import { CardElevations, CardProps } from "./card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      options: CardElevations,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} style={{ maxWidth: 520 }}>
    <Heading size={HeadingSizes.Small}>Card elevation: {args.elevation || "none"}</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </Card>
);

export const Default = Template.bind({});

const TemplateList: ComponentStory<typeof Card> = (args: CardProps) => {
  const elevations = Object.values(CardElevations);
  return (
    <div>
      {elevations.map((elevation, key) => (
        <div key={key} style={{ marginBottom: 32 }}>
          <Template {...args} elevation={elevation} />
        </div>
      ))}
    </div>
  );
};

export const Elevations = TemplateList.bind({});
