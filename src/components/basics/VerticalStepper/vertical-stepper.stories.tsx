import type { ComponentMeta, ComponentStory } from "@storybook/react";

import VerticalStepper from "./vertical-stepper.component";

export default {
  title: "Components/Stepper/VerticalStepper",
  component: VerticalStepper,
  argTypes: {},
} as ComponentMeta<typeof VerticalStepper>;

const Template: ComponentStory<typeof VerticalStepper> = (args) => <VerticalStepper {...args} />;

const DefaultArgs = {
  items: [
    {
      title: "A soma de forma intuitiva",
      subtitle: "8 minutos",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "video",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Exercícios de compreensão sobre soma",
      subtitle: "3 exercícios",
      children: (
        <VerticalStepper
          items={[
            {
              title: "Exercício 1",
              link: {
                href: "https://mesalva.com",
                target: "_blank",
              },
              circleColor: "var(--color-text-disabled)",
            },
            {
              title: "Exercício 2",
              link: {
                href: "https://mesalva.com",
                target: "_blank",
              },
              circleColor: "var(--color-text-disabled)",
            },
            {
              title: "Exercício 3",
              link: {
                href: "https://mesalva.com",
                target: "_blank",
              },
              circleColor: "var(--color-text-disabled)",
            },
          ]}
        />
      ),
      icon: "edit",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Somando de tudo",
      subtitle: "10 minutos",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "video",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Exercícios de compreensão sobre soma II",
      subtitle: "3 exercícios",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "edit",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Somando de tudo",
      subtitle: "9 minutos",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "video",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Exercícios de compreensão sobre subtração",
      subtitle: "3 exercícios",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "edit",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Exercícios de compreensão sobre subtração de naturais",
      subtitle: "5 exercícios",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "edit",
      iconColor: "var(--color-white)",
      circleColor: "var(--color-text-primary)",
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
