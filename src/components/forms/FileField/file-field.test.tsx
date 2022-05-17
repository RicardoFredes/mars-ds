import type { FileFieldProps } from "./file-field.types";

import { fireEvent, render, waitFor } from "@testing-library/react";

import FileField from "./file-field.component";

const makeSut = (props?: FileFieldProps) => render(<FileField {...props} />);

describe("<FileField>", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should render component with default props", () => {
    const wrapper = makeSut();
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should not accept files with extensions different than allowed", () => {
    const wrapper = makeSut({ extensions: ["jpg", "png"] });
    const file = new File([""], "file.pdf", { type: "application/pdf" });
    const input = wrapper.getByTestId("file-field");
    const event = { target: { files: [file] } };
    fireEvent.change(input, event);
    wrapper.getByText("Arquivo inválido. Selecione um arquivo do tipo: jpg ou png");
    expect(wrapper.container).toMatchSnapshot();
  });

  it("should accept files with extensions allowed", async () => {
    const onSelectFileSpy = jest.fn();
    const onUploadFileSpy = jest.fn();
    const wrapper = makeSut({
      extensions: ["jpg", "png"],
      onSelectFile: onSelectFileSpy,
      onUploadFile: onUploadFileSpy,
    });

    const file = new File(["1"], "file.png", { type: "image/png" });
    const input = wrapper.getByTestId("file-field");
    const event = { target: { files: [file] } };

    await waitFor(() => {
      fireEvent.change(input, event);
      expect(onSelectFileSpy).toHaveBeenCalledWith(file);
      expect(onUploadFileSpy).toHaveBeenCalledWith("data:image/png;base64,MQ==");
      expect(wrapper.container).toMatchSnapshot();
    });

    const removeButton = wrapper.getByTestId("remove-file-button");
    fireEvent.click(removeButton);

    expect(onSelectFileSpy).toHaveBeenCalledWith(null);
    expect(onUploadFileSpy).toHaveBeenCalledWith(null);
  });

  it("should not accept files with size greater than maxSize", () => {
    const wrapper = makeSut();

    const input = wrapper.getByTestId("file-field");
    const event = {
      target: {
        files: [
          {
            name: "image.png",
            size: 10 * 1024 * 1024,
            type: "image/png",
          },
        ],
      },
    };
    fireEvent.change(input, event);
    wrapper.getByText("Arquivo muito grande. Selecione um arquivo menor que 5MB");
    expect(wrapper.container).toMatchSnapshot();
  });
});
