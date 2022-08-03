import type { AvatarFieldProps } from "./avatar-field.types";

import { render } from "@testing-library/react";

import AvatarField from "./avatar-field.component";

const defaultProps: AvatarFieldProps = {
  extensions: ["jpg", "jpeg", "png"],
};

const makeSut = (props?: AvatarFieldProps) => render(<AvatarField {...defaultProps} {...props} />);

describe("<AvatarField>", () => {
  it("should render component with default props", () => {
    const wrapper = makeSut();
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should render component with custom extensions", () => {
    const wrapper = makeSut({ extensions: ["jpg", "jpeg"] });
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should render component with custom max file size", () => {
    const wrapper = makeSut({ ...defaultProps, maxSize: 10 * 1024 * 1024 });
    expect(wrapper.container).toMatchSnapshot();
  });
});
