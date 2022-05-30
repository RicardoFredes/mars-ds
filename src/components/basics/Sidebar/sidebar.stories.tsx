import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Sidebar from "./sidebar.component";
import { defaultSidebarList } from "./sidebar.fixtures";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    user: { control: { type: "string" } },
    fetching: { control: { type: "boolean" } },
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
    profile: { href: "#profile" },
    brand: { href: "#brand" },
  },
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Guest = Template.bind({});
Guest.args = {
  ...DefaultArgs,
  user: {
    ...DefaultArgs.user,
    guest: true,
  },
};

export const Brand = Template.bind({});
Brand.args = {
  ...DefaultArgs,
  brand:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0wNS0zMCAyMToyOTowMSArMDAwMDE5NjMzNQ%3D%3D%0A.svg",
};

export const Skeleton = Template.bind({});
Skeleton.args = {
  ...DefaultArgs,

  fetching: true,
};
export const SkeletonGuest = Template.bind({});
SkeletonGuest.args = {
  ...DefaultArgs,
  user: {
    ...DefaultArgs.user,
    guest: true,
  },
  fetching: true,
};
