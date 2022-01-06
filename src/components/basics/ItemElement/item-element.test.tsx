import { render } from "@testing-library/react";
import ItemElement from ".";
import { ItemElementProps } from "./item-element.types";

const makeSut = (props?: ItemElementProps) => render(<ItemElement {...props} />);

describe("<ItemElement>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
