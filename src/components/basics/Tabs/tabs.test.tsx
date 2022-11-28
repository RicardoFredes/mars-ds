import type { TabsProps } from "./tabs.types";

import { fireEvent, render } from "@testing-library/react";

import Tabs from "./tabs.component";

const makeSut = (props?: TabsProps) => render(<Tabs {...props} />);

describe("<Tabs>", () => {
  const tabs = [
    { label: "tab_1", children: "content_1" },
    { label: "tab_2", children: "content_2" },
    { label: "tab_3", children: "content_3" },
  ];

  it("should render with the same provided tabs", () => {
    const wrapper = makeSut({ tabs });
    const tabElements = wrapper.getAllByTestId("tab-item");
    const tabContents = wrapper.getAllByTestId("tab-content");
    expect(tabElements).toHaveLength(tabs.length);
    expect(tabContents).toHaveLength(tabs.length);
  });

  it("should active the first tab and content as default", () => {
    const wrapper = makeSut({ tabs });
    const [{ label, children }] = tabs as any;
    const tabElement = wrapper.getByText(label);
    const contentElement = wrapper.getByText(children);

    expect(tabElement.parentElement).toHaveAttribute(
      "class",
      "btn btn--naked btn--size-sm tabs__btn tabs__btn--is-active"
    );
    expect(contentElement).toHaveAttribute("class", "tabs__content tabs__content--is-active");
  });

  it("should active a custom tab", () => {
    const defaultTabIndex = 2;
    const wrapper = makeSut({ tabs, defaultTabIndex });
    const { label, children } = tabs[defaultTabIndex] as any;
    const tabElement = wrapper.getByText(label);
    const contentElement = wrapper.getByText(children);

    expect(tabElement.parentElement).toHaveAttribute(
      "class",
      "btn btn--naked btn--size-sm tabs__btn tabs__btn--is-active"
    );
    expect(contentElement).toHaveAttribute("class", "tabs__content tabs__content--is-active");
  });

  it("should active tab on click", () => {
    const targetIndex = 1;
    const wrapper = makeSut({ tabs });
    const { label, children } = tabs[targetIndex] as any;
    const selectElements = () => ({
      tab: wrapper.getByText(label),
      content: wrapper.getByText(children),
    });
    const before = selectElements();
    expect(before.tab.parentElement).toHaveAttribute(
      "class",
      "btn btn--naked btn--size-sm tabs__btn"
    );
    expect(before.content).toHaveAttribute("class", "tabs__content");

    fireEvent.click(before.tab);
    const after = selectElements();
    expect(after.tab.parentElement).toHaveAttribute(
      "class",
      "btn btn--naked btn--size-sm btn--is-pressed tabs__btn tabs__btn--is-active"
    );
    expect(after.content).toHaveAttribute("class", "tabs__content tabs__content--is-active");
  });

  it("should pass full props to className", () => {
    const wrapper = makeSut({ tabs, full: true });
    const headerElement = wrapper.getByTestId("tabs-header");
    expect(headerElement).toHaveAttribute("class", "tabs__header tabs__header--is-full");
  });

  it("pass align props to className", () => {
    const wrapper = makeSut({ tabs, align: "center" });
    const headerElement = wrapper.getByTestId("tabs-header");
    expect(headerElement).toHaveAttribute("class", "tabs__header tabs__header--is-center");
  });
});
