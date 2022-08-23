import type { AreaFieldProps } from "./area-field.types";

import { render } from "@testing-library/react";

import AreaField from "./area-field.component";

const makeSut = (props?: AreaFieldProps) => render(<AreaField {...props} />);

describe("<AreaField>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
