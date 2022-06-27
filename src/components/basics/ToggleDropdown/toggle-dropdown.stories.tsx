import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import ToggleDropdown from "./toggle-dropdown.component";

export default {
  title: "Components/ToggleDropdown",
  component: ToggleDropdown,
  argTypes: {
    className: {
      description: "The class name of the component receives the same 'classnames' props",
      control: { type: "object" },
    },
    style: {
      description: "The style of the component receives the same 'style' props",
      control: { type: "object" },
    },
    disabled: {
      description: "Disable the toggle dropdown",
      control: { type: "boolean" },
      defaultValue: false,
    },
    defaultValue: {
      description: "The default value of the toggle dropdown",
      control: { type: "boolean" },
      defaultValue: false,
    },
    toggleButton: {
      description: "The props to configure a toggle button of the toggle dropdown",
      control: { type: "object" },
      defaultValue: {
        title: "Abrir mais opções para o item",
        iconName: "more-vertical",
        size: "sm",
        variant: "text",
      },
    },
    list: {
      description: "The list of the dropdown menu",
      control: { type: "array" },
      defaultValue: undefined,
    },
    onToggle: {
      description: "The function to be called when the toggle dropdown is toggled",
      control: { type: "function" },
      defaultValue: undefined,
      action: "onToggle",
    },
    componentLink: {
      description: 'The component link of the dropdown menu items if has "href"',
      control: { type: "object" },
      defaultValue: undefined,
    },
    isRight: {
      description: "The dropdown menu is positioned to the right",
      control: { type: "boolean" },
      defaultValue: false,
    },
    isAbove: {
      description: "The dropdown menu is positioned above",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ToggleDropdown>;

const Template: ComponentStory<typeof ToggleDropdown> = (args) => <ToggleDropdown {...args} />;

const DefaultArgs = {
  list: [
    { label: "Item 1", onClick: action("Item 1 clicked") },
    { label: "Item 2", onClick: action("Item 2 clicked") },
    {
      label: "Item 3",
      onClick: action("Item 3 clicked"),
      href: "https://www.mesalva.com",
      target: "_blank",
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Disabled = Template.bind({});
Disabled.args = { ...DefaultArgs, disabled: true };

export const Opened = Template.bind({});
Opened.args = { ...DefaultArgs, defaultValue: true };

export const Right: ComponentStory<typeof ToggleDropdown> = (args) => (
  <div className="flex justify-content-center">
    <ToggleDropdown {...args} />
  </div>
);
Right.args = { ...DefaultArgs, defaultValue: true, isRight: true };

export const Above: ComponentStory<typeof ToggleDropdown> = (args) => (
  <div className="flex justify-content-center" style={{ paddingTop: 200 }}>
    <ToggleDropdown {...args} />
  </div>
);
Above.args = { ...DefaultArgs, defaultValue: true, isAbove: true };
