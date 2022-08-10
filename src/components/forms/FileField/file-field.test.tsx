import type { FileFieldProps } from "./file-field.types";

import { fireEvent, render, waitFor } from "@testing-library/react";

import FileField from "./file-field.component";

const onSelectFileSpy = jest.fn();
const onUploadFileSpy = jest.fn();
const inputTestId = "file-input";

const makeSut = (props?: FileFieldProps) => render(<FileField {...props} />);

describe("<FileField>", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render component with default props", () => {
    const wrapper = makeSut();
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should accept files with extensions allowed", async () => {
    const wrapper = makeSut({
      extensions: ["jpg", "png"],
      onSelectFile: onSelectFileSpy,
      onUploadFile: onUploadFileSpy,
    });

    const file = new File(["1"], "file.png", { type: "image/png" });
    const input = wrapper.getByTestId(inputTestId);
    const event = { target: { files: [file] } };

    await waitFor(() => {
      fireEvent.change(input, event);
      expect(onSelectFileSpy).toHaveBeenCalledWith(file);
      expect(onUploadFileSpy).toHaveBeenCalledWith("data:image/png;base64,MQ==");
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});
