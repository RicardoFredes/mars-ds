import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Sidebar from "./sidebar.component";
import { defaultSidebarList } from "./sidebar.fixtures";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    user: { control: { type: "string" } },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

const DefaultArgs = {
  sidebarList: defaultSidebarList,
  user: {
    name: "Ricardo Fredes",
    image: "https://mir-s3-cdn-cf.behance.net/user/276/6c0d6c17408183.5673f97381d95.jpg",
    href: "https://google.com",
  },
  currentPathname: "simulados",
  links: {
    profile: "#profile",
    brand: "#brand",
  },
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
