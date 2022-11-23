import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { useState } from "react";

import { ItemCheckbox } from "@/index";

import ItemCheckboxGroup from "./item-checkbox-group.component";

export default {
  title: "Forms/ItemCheckboxGroup",
  component: ItemCheckboxGroup,
  argTypes: {},
} as ComponentMeta<typeof ItemCheckboxGroup>;

const Template: ComponentStory<typeof ItemCheckboxGroup> = (args) => {
  const [list, setList] = useState(args.list);

  const checkAll = (status: boolean) => {
    setList(list?.map(({ label }) => ({ label, checked: status === true })));
  };

  const checkByIndex = (status: boolean, index: number) => {
    setList(
      list?.map((value, curIndex) => ({
        ...value,
        checked: curIndex === index ? status : value.checked,
      }))
    );
  };
  return (
    <>
      <ItemCheckboxGroup {...args} list={list} onChange={checkAll} className="mb-md" />
      {list?.map(({ ...props }, index) => (
        <ItemCheckbox
          defaultChecked={true}
          className="mb-md"
          key={`item-checkbox-${index}`}
          onChange={(status) => checkByIndex(status, index)}
          {...props}
        />
      ))}
    </>
  );
};

const DefaultArgs = {
  label: "Todas as matérias",
  list: [
    {
      label: "Matemática",
      name: "matematica",
      checked: false,
    },
    {
      label: "Geografia",
      name: "geografia",
      checked: true,
    },
    {
      label: "Física",
      name: "fisica",
      checked: true,
    },
    {
      label: "Inglês",
      name: "ingles",
      checked: false,
    },
    {
      label: "Espanhol",
      name: "espanhol",
      checked: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
