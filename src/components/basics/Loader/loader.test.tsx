import type { LoaderProps } from "./loader.types";

import { render } from "@testing-library/react";

import Loader from "./loader.component";

const makeSut = (props?: LoaderProps) => render(<Loader {...props} />);

describe("<Loader>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
