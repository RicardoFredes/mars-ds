import type { ConsoleListItemProps } from "./console-list-item.types";

import { render } from "@testing-library/react";

import ConsoleListItem from "./console-list-item.component";

const testId = "console-list-item";

const defaultProps: ConsoleListItemProps = {
  title: "any_title",
  subtitle: "any_subtitle",
  iconName: "edit",
};

const makeSut = (props?: Partial<ConsoleListItemProps>) =>
  render(<ConsoleListItem {...defaultProps} {...props} />);

describe("<ConsoleListItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut();

    expect(wrapper).toBeTruthy();
  });

  it("should render component with the correct title and subtitle", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);
    const content = component.getElementsByClassName("console-list-item__content");

    expect(content.length).toBeGreaterThan(0);
    expect(content[0]?.children.length).toBe(2);

    expect(content[0]?.children[0]).toBeInstanceOf(HTMLHeadingElement);
    expect(content[0]?.children[0]?.textContent).toBe(defaultProps.title);

    expect(content[0]?.children[1]).toBeInstanceOf(HTMLSpanElement);
    expect(content[0]?.children[1]?.textContent).toBe(defaultProps.subtitle);
  });

  it("should render component with the correct icon", () => {
    const { getByTestId } = makeSut(defaultProps);
    const component = getByTestId(testId);
    const iconContainer = component.getElementsByClassName("console-list-item__icon-container");

    expect(iconContainer.length).toBe(1);
    expect(iconContainer[0]?.children.length).toBe(1);

    expect(iconContainer[0]?.children[0]).toBeInstanceOf(HTMLSpanElement);
    expect(iconContainer[0]?.children[0]?.getAttribute("data-name")).toBe(defaultProps.iconName);
  });

  describe("when it has a modifier", () => {
    it("should render with the is-answered modifier", () => {
      const { getByTestId } = makeSut({ isAnswered: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(`console-list-item console-list-item--is-answered`);
    });

    it("should render with the is-active modifier", () => {
      const { getByTestId } = makeSut({ isActive: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(`console-list-item console-list-item--is-active`);
    });

    it("should render with the is-answered-and-active modifier", () => {
      const { getByTestId } = makeSut({ isAnswered: true, isActive: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(
        `console-list-item console-list-item--is-answered-and-active`
      );
    });

    it("should render with the is-disabled modifier", () => {
      const { getByTestId } = makeSut({ isDisabled: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(`console-list-item console-list-item--is-disabled`);
    });

    it("should render with the is-connector-disabled modifier", () => {
      const { getByTestId } = makeSut({ isConnectorDisabled: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(
        `console-list-item console-list-item--is-connector-disabled`
      );
    });

    it("should render with the is-first-item modifier", () => {
      const { getByTestId } = makeSut({ isFirstItem: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(`console-list-item console-list-item--is-first-item`);
    });

    it("should render with the is-first-last modifier", () => {
      const { getByTestId } = makeSut({ isLastItem: true });
      const component = getByTestId(testId);

      expect(component.className).toBe(`console-list-item console-list-item--is-last-item`);
    });
  });

  describe("when has a link or custom component", () => {
    it("should render as an anchor element", () => {
      const { getByTestId } = makeSut({
        href: "https://www.mesalva.com",
      });

      const component = getByTestId(testId);

      expect(component).toBeInstanceOf(HTMLAnchorElement);
      expect(component).toHaveAttribute("href", "https://www.mesalva.com");
    });

    it("should render as a custom component", () => {
      const { getByTestId } = makeSut({
        as: "button",
      });

      const component = getByTestId(testId);
      expect(component).toBeInstanceOf(HTMLButtonElement);
    });
  });
});
