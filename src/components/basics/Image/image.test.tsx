import type { ImageProps } from "./image.types";

import { render } from "@testing-library/react";

import Image from "./image.component";

const defaultProps = {
  title: "any_title",
};

const makeSut = (props?: ImageProps) => render(<Image {...defaultProps} {...props} />);

describe("<Image>", () => {
  it("should render component with basic props", () => {
    const wrapper = makeSut({
      src: "default.png",
      height: 150,
      width: 300,
    });
    expect(wrapper).toMatchSnapshot();
  });

  describe("when has screen sizes props", () => {
    it("should be default src", () => {
      const src = "default.png";
      const wrapper = makeSut({ src });
      const image = wrapper.getByAltText(defaultProps.title);
      expect(image).toHaveAttribute("src", src);
    });

    it("should be default src", () => {
      const src = "default.png";
      const sm = {
        src: "sm.png",
      };
      const wrapper = makeSut({ src, sm });
      const image = wrapper.getByAltText(defaultProps.title);
      expect(image).toHaveAttribute("src", src);
    });

    it("should not be default src", () => {
      const sm = {
        src: "sm.png",
      };
      const wrapper = makeSut({ sm });
      const image = wrapper.getByAltText(defaultProps.title);
      expect(image).toHaveAttribute("src", sm.src);
    });

    it("should render component with advanced props", () => {
      const wrapper = makeSut({
        src: "default.png",
        height: 150,
        width: 300,
        darkModeSrc: "darkmode.png",
        md: {
          src: "md.png",
        },
      });
      expect(wrapper).toMatchSnapshot();
    });

    it("should put specific className if autoDarkMode is true", () => {
      const wrapper = makeSut({ src: "default.png", autoDarkMode: true });
      const element = wrapper.getByTestId("image");
      expect(element).toHaveAttribute("class", "image image--auto-invert-color");
    });
  });
});
