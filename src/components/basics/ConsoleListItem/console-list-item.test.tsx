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

    expect(wrapper).toMatchSnapshot();
  });

  describe("when it has a modifier", () => {
    const baseClasses = "console-list-item console-list-item--";

    it("should render with the is-active modifier", () => {
      const { getByTestId } = makeSut({ isActive: true });

      expect(getByTestId(testId)).toHaveClass(`${baseClasses}is-active`);
    });

    it("should render with the is-disabled modifier", () => {
      const { getByTestId } = makeSut({ isDisabled: true });

      expect(getByTestId(testId)).toHaveClass(`${baseClasses}is-disabled`);
    });

    it("should render with the is-connector-disabled modifier", () => {
      const { getByTestId } = makeSut({ isConnectorDisabled: true });

      expect(getByTestId(testId)).toHaveClass(`${baseClasses}is-connector-disabled`);
    });

    it("should render with the is-answered modifier", () => {
      const { getByTestId } = makeSut({ isAnswered: true });

      expect(getByTestId(testId)).toHaveClass(`${baseClasses}is-answered`);
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
      const LinkComponent = "button";

      const { getByTestId } = makeSut({
        LinkComponent,
      });

      const component = getByTestId(testId);

      expect(component.tagName).toBe("BUTTON");
    });
  });
});
