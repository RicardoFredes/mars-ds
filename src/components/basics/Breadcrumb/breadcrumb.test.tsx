import type { BreadcrumbProps } from "./breadcrumb.types";

import { fireEvent, render } from "@testing-library/react";

import Breadcrumb from ".";
import { mockDefaultBreadcrumblist } from "./breadcrumb.fixture";

const makeSut = (props?: BreadcrumbProps) =>
  render(<Breadcrumb list={mockDefaultBreadcrumblist} {...props} />);

const PROPS = {
  ITEM_TEST_ID: "breadcrumb-item",
  ITEM_CLASSNAME: "breadcrumb__item",
  ITEM_POPOVER_TRIGGER: "breadcrumb-popover-trigger",
  ITEM_POPOVER: "breadcrumb-popover",
  ITEM_CLASSNAME_ACTIVE: "breadcrumb__item--is-active",
};

describe("<Breadcrumb>", () => {
  it("should match the snapshot", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });

  it("should put active class on last item of breadcrumb", () => {
    const wrapper = makeSut();
    const breadCrumbItems = wrapper.getAllByTestId(PROPS.ITEM_TEST_ID);
    const [firstElement, middleElement, lastElement] = breadCrumbItems;
    expect(firstElement?.className).not.toContain(PROPS.ITEM_CLASSNAME_ACTIVE);
    expect(middleElement?.className).not.toContain(PROPS.ITEM_CLASSNAME_ACTIVE);
    expect(lastElement?.className).toContain(PROPS.ITEM_CLASSNAME_ACTIVE);
  });

  it("shoud call a function when click on non active items ", () => {
    const onClickSpy = jest.fn();
    const list = [
      { label: "First Item", onClick: onClickSpy },
      { label: "Second Item", onClick: onClickSpy },
      { label: "Active Item", onClick: onClickSpy },
    ];
    const wrapper = makeSut({ list });
    const breadCrumbItems = wrapper.getAllByTestId(PROPS.ITEM_TEST_ID);

    const [firstElement, middleElement, lastElement] = breadCrumbItems;

    fireEvent.click(firstElement as HTMLElement);
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toBeCalledTimes(1);

    onClickSpy.mockClear();
    fireEvent.click(middleElement as HTMLElement);
    expect(onClickSpy).toHaveBeenCalled();
    expect(onClickSpy).toBeCalledTimes(1);

    onClickSpy.mockClear();
    fireEvent.click(lastElement as HTMLElement);
    expect(onClickSpy).not.toHaveBeenCalled();
    expect(onClickSpy).toBeCalledTimes(0);
  });

  describe("with more than 3 items", () => {
    const onClickSpy = jest.fn();
    const list = ["First Item", "Second Item", "Third Item", "Active Item"].map((label) => ({
      label,
      onClick: onClickSpy,
    }));

    it("should there are first and last items as Link and there is a middle element as dropdown menu", () => {
      const wrapper = makeSut({ list });

      const breadcrumbItems = wrapper.getAllByTestId(PROPS.ITEM_TEST_ID);
      expect(breadcrumbItems.length).toEqual(2);
      wrapper.getByTestId(PROPS.ITEM_POPOVER_TRIGGER);
      wrapper.getByText("...");
    });

    it("should open the popover after click on trigger", () => {
      const wrapper = makeSut({ list });
      const triggerBreadCrumb = wrapper.getByTestId(PROPS.ITEM_POPOVER_TRIGGER);
      fireEvent.click(triggerBreadCrumb);

      wrapper.getByTestId(PROPS.ITEM_POPOVER);

      const secondItem = wrapper.getByText("Second Item");
      wrapper.getByText("Third Item");

      fireEvent.click(secondItem);
      expect(onClickSpy).toBeCalledTimes(1);

      const itemPopover = wrapper.queryAllByTestId(PROPS.ITEM_POPOVER);
      expect(itemPopover).toHaveLength(0);

      fireEvent.click(triggerBreadCrumb);
      const thirdItem = wrapper.getByText("Third Item");
      fireEvent.click(thirdItem);
      expect(onClickSpy).toBeCalledTimes(2);
    });

    it("should render popover with more items", () => {
      const LENGTH_LIST = Math.ceil(Math.random() * 100) + 3;

      const LABEL_TEXT = "popover-item";
      const list = new Array(LENGTH_LIST).fill(null).map(() => ({ label: LABEL_TEXT }));
      list.push({ label: "Last item" });
      list.unshift({ label: "First item" });

      const wrapper = makeSut({ list });

      const triggerBreadCrumb = wrapper.getByTestId(PROPS.ITEM_POPOVER_TRIGGER);
      fireEvent.click(triggerBreadCrumb);

      expect(wrapper.getAllByText(LABEL_TEXT)).toHaveLength(LENGTH_LIST);
    });

    it("should match to snapshot", () => {
      const wrapper = makeSut({ list });
      const triggerBreadCrumb = wrapper.getByTestId(PROPS.ITEM_POPOVER_TRIGGER);
      fireEvent.click(triggerBreadCrumb);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
