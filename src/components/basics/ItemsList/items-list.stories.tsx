import type { ItemsListProps } from "./items-list.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ItemsList from "./items-list.component";

export default {
  title: "Components/ItemsList",
  component: ItemsList,
  argTypes: {},
} as ComponentMeta<typeof ItemsList>;

const Template: ComponentStory<typeof ItemsList> = (args) => <ItemsList {...args} />;

const DefaultArgs: ItemsListProps = {
  list: [
    {
      title: "A soma de forma intuitiva",
      subtitle: "8 minutos",
      link: {
        href: "https://mesalva.com",
        target: "_blank",
      },
      icon: "video",
      iconColor: "var(--color-background-primary)",
      circleColor: "var(--color-text-primary)",
    },
    {
      title: "Exercícios de compreensão sobre soma",
      subtitle: "3 exercícios",
      children: (
        <ItemsList
          list={[
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
      iconColor: "var(--color-background-primary)",
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
      iconColor: "var(--color-background-primary)",
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
      iconColor: "var(--color-background-primary)",
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
      iconColor: "var(--color-background-primary)",
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
      iconColor: "var(--color-background-primary)",
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
      iconColor: "var(--color-background-primary)",
      circleColor: "var(--color-text-primary)",
    },
  ],
};

export const Default = Template.bind({});
Default.args = { ...DefaultArgs };
