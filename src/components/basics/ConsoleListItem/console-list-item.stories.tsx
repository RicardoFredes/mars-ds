import type { ConsoleListItemProps } from "./console-list-item.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ConsoleListItem from "./console-list-item.component";

const myStoryFunctionDescription =
  "The ConsoleListItem component is meant to be used by the ConsoleList component, either alone or inside a ConsoleGroupProps component.";

export default {
  title: "Components/Console/ConsoleListItem",
  parameters: {
    docs: {
      storyDescription: myStoryFunctionDescription,
    },
  },
  component: ConsoleListItem,
  argTypes: {
    title: {
      description: "The title to be shown inside the component",
    },
    subtitle: {
      description: "The subtitle to be shown below the title",
    },
    iconName: {
      description: "The icon that is shown next to the title/subtitle",
    },
    isActive: {
      description:
        "Whether the item is active (has the same behavior of when the item is hovered) or not",
      control: "boolean",
      defaultValue: false,
    },
    isConnectorDisabled: {
      description:
        "Whether the vertical lines connecting the component to the component above and below is disabled or not",
      control: "boolean",
      defaultValue: false,
    },
    isAnswered: {
      description:
        "Whether the item is checked or not, this causes it to show a different icon, with a different color",
      control: "boolean",
      defaultValue: false,
    },
    isFirstItem: {
      description:
        "Whether or not to show the vertical line connecting the component to the component above",
      control: "boolean",
      defaultValue: false,
    },
    isLastItem: {
      description:
        "Whether or not to show the vertical line connecting the component to the component below",
      control: "boolean",
      defaultValue: false,
    },
    href: {
      description:
        "Transforms the underlying component into an anchor tag, redirecting to the provided URL",
      control: {
        type: "select",
        /** @import("react").HTMLAttributeAnchorTarget */
        options: ["", "_self", "_blank", "_parent", "_top"],
      },
    },
    as: {
      description: "Transforms the underlying component into a custom component",
    },
  },
} as ComponentMeta<typeof ConsoleListItem>;

const Template: ComponentStory<typeof ConsoleListItem> = (args) => <ConsoleListItem {...args} />;

const DefaultArgs: ConsoleListItemProps = {
  title: "Item de console",
  subtitle: "99 quest??es",
  iconName: "edit",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  docs: {
    description: {
      story: "Component with the default props (all modifiers are disabled)",
    },
  },
};

export const Active = Template.bind({});
Active.args = { ...DefaultArgs, isActive: true };
Active.parameters = {
  docs: {
    description: {
      story: "Component with the isActive modifier enabled",
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = { ...DefaultArgs, isDisabled: true };
Disabled.parameters = {
  docs: {
    description: {
      story: "Component with the isDisabled modifier enabled",
    },
  },
};

export const ConnectorDisabled = Template.bind({});
ConnectorDisabled.args = { ...DefaultArgs, isConnectorDisabled: true };
ConnectorDisabled.parameters = {
  docs: {
    description: {
      story: "Component with the isConnectorDisabled modifier enabled",
    },
  },
};

export const Answered = Template.bind({});
Answered.args = { ...DefaultArgs, isAnswered: true };
Answered.parameters = {
  docs: {
    description: {
      story: "Component with the isAnswered modifier enabled",
    },
  },
};

export const WithLink = Template.bind({});
WithLink.args = { ...DefaultArgs, href: "https://www.mesalva.com", target: "_blank" };
WithLink.parameters = {
  docs: {
    description: {
      story: "Component as a link",
    },
  },
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  ...DefaultArgs,
  title:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi assumenda accusamus dolorem, non voluptate velit ea voluptatum animi magnam aspernatur alias mollitia cumque illum unde vel. Sapiente error at animi vitae dolorem tempore ullam ad, qui quisquam, possimus nesciunt rerum eaque? Sapiente, fuga quibusdam. Nemo in sed alias quisquam illo vitae cupiditate error sunt ducimus rem natus, vero voluptatem optio quaerat doloribus officia quasi maiores recusandae molestiae consectetur culpa ratione, vel tempora. Possimus explicabo quam labore cupiditate ab suscipit repellendus reprehenderit harum. Cum totam corrupti repellat eveniet eligendi accusantium expedita sit amet ipsa optio omnis quo officiis eius nihil, iusto inventore quaerat sapiente dicta nostrum nesciunt repudiandae atque cumque ex. Error quasi expedita dicta veritatis totam dolorem praesentium illo nesciunt magni tempore facere quod, modi repellat soluta neque aperiam! Quos, et eius, a sit ipsam dolorum sed asperiores sapiente praesentium magnam quas unde optio fugit est accusamus obcaecati minima libero ipsum incidunt sunt. Fugiat quo tempora perferendis laboriosam. Dolore tempora quod iusto, ullam natus nemo expedita veniam minima! Magnam incidunt soluta officia rem cumque delectus. Excepturi voluptates quidem provident, quae dicta eius quod sint in rem recusandae debitis commodi molestias blanditiis repellendus cupiditate, accusamus sapiente suscipit nam mollitia officia sed.",
};
WithLongTitle.parameters = {
  docs: {
    description: {
      story: "Componente pode crescer corretamente caso o t??tulo seja longo",
    },
  },
};
