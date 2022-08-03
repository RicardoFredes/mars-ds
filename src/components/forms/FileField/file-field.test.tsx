import type { FileFieldProps } from "./file-field.types";

import { render } from "@testing-library/react";

import FileField from "./file-field.component";

const makeSut = (props?: FileFieldProps) => render(<FileField {...props} />);

describe("<FileField>", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render component with default props", () => {
    const wrapper = makeSut();
    expect(wrapper.container).toMatchSnapshot();
  });
});
