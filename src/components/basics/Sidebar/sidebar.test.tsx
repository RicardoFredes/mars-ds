import type { SidebarProps } from "./sidebar.types";

import { render } from "@testing-library/react";

import Sidebar from "./sidebar.component";
import { defaultSidebarList } from "./sidebar.fixtures";

const DATA_IDS = {
  name: "sidebar__user-name",
  item: "sidebar__item",
  title: "sidebar__title",
  avatar: "sidebar__user-avatar",
  guest: "sidebar__guest",
  skeleton: "sidebar__skeleton",
};

const makeSut = (props?: Partial<SidebarProps>) =>
  render(
    <Sidebar
      sidebarList={defaultSidebarList}
      user={{
        name: "Artur Monteiro",
        image: "https://via.placeholder/40",
      }}
      fetching={false}
      {...props}
    />
  );

describe("<Sidebar>", () => {
  describe("with fetching equals false", () => {
    it("should render component", () => {
      const wrapper = makeSut();
      expect(wrapper).toBeTruthy();
    });

    it("should render the card profile info with the name of user passed", () => {
      const wrapper = makeSut();
      const userName = wrapper.getByTestId(DATA_IDS.name);
      expect(userName.textContent).toBe("Artur Monteiro");
    });

    it("should mark item as active if its href matches with currentPathname", () => {
      const { getByText } = makeSut({ currentPathname: "/mentorias" });
      const item = getByText("Mentorias");
      expect(item.className).toContain("--is-active");
    });

    it("should have at least 1 title", () => {
      const wrapper = makeSut();
      const sidebarTitles = wrapper.getAllByTestId(DATA_IDS.title);
      expect(sidebarTitles.length).toBeGreaterThan(0);
    });

    it("should render the exact amount of items passed", () => {
      const sidebarItemsAmount = defaultSidebarList.reduce((acc, val) => acc + val.items.length, 0);
      const wrapper = makeSut();
      const sidebarItems = wrapper.getAllByTestId(DATA_IDS.item);
      expect(sidebarItems.length).toBe(sidebarItemsAmount);
    });

    it("should render an image on avatar icon", () => {
      const image = "https://via.placeholder/120";
      const wrapper = makeSut({
        user: {
          name: "Artur Monteiro",
          image,
        },
        sidebarList: defaultSidebarList,
      });
      const sidebarUserAvatar = wrapper.getByTestId(DATA_IDS.avatar);
      expect(sidebarUserAvatar.style.backgroundImage).toContain(image);
    });

    it("should render the guest section when user.guest equals true", () => {
      const user = { guest: true };
      const { getByTestId } = makeSut({ user });
      const sidebarGuest = getByTestId(DATA_IDS.guest);
      expect(sidebarGuest).toBeTruthy();
    });
  });
  describe("with fetching equals true", () => {
    const fetching = true;
    it("should render the skeleton version of sidebar", () => {
      const { getByTestId } = makeSut({ fetching });
      const skeleton = getByTestId(DATA_IDS.skeleton);

      expect(skeleton).toBeTruthy();
    });

    it("should render the guest section when user.guest equals true", () => {
      const user = { guest: true };
      const { getByTestId } = makeSut({ user, fetching });
      const sidebarGuest = getByTestId(DATA_IDS.guest);
      expect(sidebarGuest).toBeTruthy();
    });
  });
});
