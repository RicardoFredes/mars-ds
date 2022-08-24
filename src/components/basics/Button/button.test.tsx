import type { ButtonProps } from "./button.types";

import { fireEvent, render } from "@testing-library/react";

import type { IconProps } from "@/components/basics/Icon";

import Button from "./button.component";
import { ButtonSizes, ButtonVariants } from "./button.types";

jest.mock("@/components/basics/Icon", () => {
  const MockIcon = ({ className, name, size }: IconProps) => (
    <i data-testid="icon" className={className} data-size={size}>
      {name}
    </i>
  );
  return MockIcon;
});

const buttonText = "My Button";
const buttonDataTestId = "button-testid";
const sizesTable = Object.entries(ButtonSizes).map(([name, size]) => ({ name, size }));
const variantsTable = Object.entries(ButtonVariants).map(([name, variant]) => ({ name, variant }));
const makeSut = (props?: ButtonProps) =>
  render(
    <Button data-testid={buttonDataTestId} {...props}>
      {buttonText}
    </Button>
  );

describe("<Button>", () => {
  it("should render component with default props", () => {
    const { getByTestId, getByText } = makeSut();
    const button = getByTestId(buttonDataTestId);
    getByText(buttonText);
    expect(button.className).toBe("btn btn--primary btn--size-md");
  });

  it.each(variantsTable)("should render component with $name variant", ({ variant }) => {
    const button = makeSut({ variant }).getByTestId(buttonDataTestId);
    expect(button.className).toBe(`btn btn--${variant} btn--size-md`);
  });

  it.each(sizesTable)("should render component with $name size", ({ size }) => {
    const button = makeSut({ size }).getByTestId(buttonDataTestId);
    expect(button.className).toBe(`btn btn--primary btn--size-${size}`);
  });

  it("should render disabled component", () => {
    const onClick = jest.fn();
    const button = makeSut({ disabled: true, onClick }).getByTestId(buttonDataTestId);
    expect(button.className).toBe("btn btn--primary btn--size-md btn--is-disabled");
    expect(button.hasAttribute("disabled")).toBeTruthy();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should call onClick if button is NOT disabled", () => {
    const onClick = jest.fn();
    const button = makeSut({ disabled: false, onClick }).getByTestId(buttonDataTestId);
    expect(button.hasAttribute("disabled")).toBeFalsy();
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should add is-pressed status into className", () => {
    const className = "btn btn--primary btn--size-md btn--is-pressed";
    const button = makeSut().getByTestId(buttonDataTestId);
    fireEvent.click(button);
    expect(button.className).toBe(className);
    setTimeout(() => expect(button.className).not.toBe(className), 251);
  });

  it('should render component as "button"', () => {
    const button = makeSut().getByTestId(buttonDataTestId);
    expect(button.tagName).toBe("BUTTON");
  });

  it("should render component with icon", () => {
    const iconName = "valid_icon_name";
    const { getByTestId } = makeSut({ iconName });
    const icon = getByTestId("icon");
    expect(icon.className).toBe("btn__icon");
    expect(icon.textContent).toBe(iconName);
    expect(icon.getAttribute("data-size")).toBe("md");
  });

  it.each(sizesTable)("should render component with icon $name size", ({ size }) => {
    const iconName = "valid_icon_name";
    const { getByTestId } = makeSut({ iconName, size });
    const icon = getByTestId("icon");
    expect(icon.textContent).toBe(iconName);
    expect(icon.getAttribute("data-size")).toBe(size);
  });

  it("should render link component when href is on props", () => {
    const { getByTestId } = makeSut({ href: "https://mesalva.com" });
    const { tagName } = getByTestId(buttonDataTestId);
    const tag = tagName.toLowerCase();
    expect(tag).toEqual("a");
  });

  it("snapshot right icon", () => {
    const wrapper = makeSut({ isRtl: true });
    expect(wrapper).toMatchSnapshot();
  });

  it("add is-rtl className in button", () => {
    const className = "btn btn--primary btn--size-md btn--is-rtl";
    const button = makeSut({ isRtl: true }).getByTestId(buttonDataTestId);
    expect(button.className).toBe(className);
  });
});
