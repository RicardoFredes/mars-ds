import { render } from "@testing-library/react";
import Sidebar from ".";
import { defaultSidebarList } from "./sidebar.fixtures";
import { SidebarProps } from "./sidebar.types";

const DATA_IDS = {
  name: "sidebar__user-name",
  item: "sidebar__item",
  title: "sidebar__title",
  avatar: "sidebar__user-avatar",
};

const sidebarItemClasses = {
  default: "btn btn--text btn--size-md sidebar-item",
  active: "btn btn--text btn--size-md sidebar-item--is-active",
};

const makeSut = (props?: SidebarProps) =>
  render(
    <Sidebar
      sidebarList={defaultSidebarList}
      user={{
        name: "Artur Monteiro",
        image: "https://via.placeholder/40",
      }}
      {...props}
    />
  );

describe("<Sidebar>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render the card profile info with the name of user passed", () => {
    const wrapper = makeSut();
    const userName = wrapper.getByTestId(DATA_IDS.name);
    expect(userName.textContent).toBe("Artur Monteiro");
  });

  it("should render the sidebar component with the third sidebar item active", () => {
    const wrapper = makeSut();
    const sidebarItems = wrapper.getAllByTestId(DATA_IDS.item);
    for (let i = 0; i < sidebarItems.length; i++) {
      if (i !== 2) {
        expect(sidebarItems[i]?.className).toBe(sidebarItemClasses.default);
      } else {
        expect(sidebarItems[i]?.className).toContain("--is-active");
      }
    }
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
});
