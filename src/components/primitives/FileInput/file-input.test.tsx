import type { FileInputProps } from "./file-input.types";

import { fireEvent, render, waitFor } from "@testing-library/react";

import Notification from "@/components/basics/Notification";

import FileInput from "./file-input.component";
import { isValidExtension } from "./file-input.helper";

describe("FileInput", () => {
  describe("isValidExtension", () => {
    it("should return true if no extensions are defined", () => {
      expect(isValidExtension("png")).toBe(true);
    });

    it("should return true if the extension is valid", () => {
      expect(isValidExtension("png", ["png"])).toBe(true);
    });

    it("should return false if the extension is not valid", () => {
      expect(isValidExtension("png", ["jpg"])).toBe(false);
    });
  });

  describe("<FileInput>", () => {
    const notificationErrorSpy = jest.spyOn(Notification, "error");
    const inputTestId = "file-input";

    const defaultProps: FileInputProps = {
      extensions: ["jpg", "jpeg", "png"],
    };

    const makeSut = (props?: FileInputProps) => render(<FileInput {...defaultProps} {...props} />);

    it("should not accept files with extensions different than allowed", () => {
      const { getByTestId } = makeSut({ extensions: ["jpg", "jpeg"] });
      const file = new File([""], "file.png", { type: "image/png" });
      const input = getByTestId(inputTestId);
      const event = { target: { files: [file] } };

      fireEvent.change(input, event);
      expect(notificationErrorSpy).toBeCalledWith(
        "Arquivo inválido. Selecione um arquivo do tipo: jpg ou jpeg"
      );
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
      const input = wrapper.getByTestId(inputTestId);
      const event = { target: { files: [file] } };

      await waitFor(() => {
        fireEvent.change(input, event);
        expect(onSelectFileSpy).toHaveBeenCalledWith(file);
        expect(onUploadFileSpy).toHaveBeenCalledWith("data:image/png;base64,MQ==");
        expect(wrapper.container).toMatchSnapshot();
      });
    });

    it("should not accept files with size greater than maxSize", () => {
      const wrapper = makeSut();

      const input = wrapper.getByTestId(inputTestId);
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
      expect(notificationErrorSpy).toBeCalledWith(
        "Arquivo muito grande. Selecione um arquivo menor que 1MB"
      );
      expect(wrapper.container).toMatchSnapshot();
    });
  });
});
