import { render } from "@testing-library/react";
import Loader from ".";
import { LoaderProps } from "./loader.types";

const makeSut = (props?: LoaderProps) => render(<Loader {...props} />);

describe("<Loader>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
