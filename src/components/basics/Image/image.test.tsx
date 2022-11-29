import type { ImageProps } from "./image.types";

import { render } from "@testing-library/react";

import { isDarkModeForced, isLightModeForced } from "@/services/theme-mode";

import Image from "./image.component";
import { mockPrefersColorScheme, parseImageSources } from "./image.helpers";

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

  it("should put specific className if autoDarkMode is true", () => {
    const wrapper = makeSut({ src: "default.png", autoDarkMode: true });
    const element = wrapper.getByTestId("image");
    expect(element).toHaveAttribute("class", "image image--auto-invert-color");
  });

  describe("when prefers colors schema is undefined", () => {
    beforeEach(() => mockPrefersColorScheme("none"));

    it("should be default src", () => {
      const src = "default.png";
      const wrapper = makeSut({ src });
      const image = wrapper.getByAltText(defaultProps.title);
      expect(image).toHaveAttribute("src", src);
    });

    describe("and has more sizes", () => {
      it("should be default src", () => {
        const src = "default.png";
        const sm = { src: "sm.png" };
        const wrapper = makeSut({ src, sm });
        const image = wrapper.getByAltText(defaultProps.title);
        expect(image).toHaveAttribute("src", src);
      });

      it("should not be default src", () => {
        const sm = { src: "sm.png" };
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
          md: { src: "md.png" },
        });
        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  describe("helpers", () => {
    describe("isDarkModeForced", () => {
      beforeEach(() => {
        window.localStorage.removeItem("theme");
      });
      it('when prefers-color-scheme is "dark" and localStorage is "theme-dark" should return false', () => {
        mockPrefersColorScheme("dark");
        window.localStorage.setItem("theme", "theme-dark");
        expect(isDarkModeForced()).toBe(false);
      });

      it('when prefers-color-scheme is "dark" and localStorage is "theme-light" should return false', () => {
        mockPrefersColorScheme("dark");
        window.localStorage.setItem("theme", "theme-light");
        expect(isDarkModeForced()).toBe(false);
      });

      it('when prefers-color-scheme is "dark" and localStorage isn\'t set should return true', () => {
        mockPrefersColorScheme("dark");
        expect(isDarkModeForced()).toBe(true);
      });
    });

    describe("isLightModeForced", () => {
      beforeEach(() => {
        window.localStorage.removeItem("theme");
      });
      it('when prefers-color-scheme is "light" and localStorage is "theme-dark" should return true', () => {
        mockPrefersColorScheme("light");
        window.localStorage.setItem("theme", "theme-dark");
        expect(isLightModeForced()).toBe(true);
      });

      it('when prefers-color-scheme is "light" and localStorage is "theme-light" should return false', () => {
        mockPrefersColorScheme("light");
        window.localStorage.setItem("theme", "theme-light");
        expect(isLightModeForced()).toBe(false);
      });

      it('when prefers-color-scheme is "light" and localStorage isn\'t set should return true', () => {
        mockPrefersColorScheme("light");
        expect(isLightModeForced()).toBe(true);
      });
    });

    describe("parseImageSources", () => {
      const sm = {
        src: "light_sm.jpg",
        darkModeSrc: "dark_sm.jpg",
        width: 150,
        height: 150,
        disableDarkMode: false,
      };

      const md = {
        src: "light_md.jpg",
        darkModeSrc: "dark_md.jpg",
        width: 400,
        height: 400,
        disableDarkMode: false,
      };

      const lg = {
        src: "light_lg.jpg",
        darkModeSrc: "dark_lg.jpg",
        width: 600,
        height: 600,
        disableDarkMode: false,
      };

      const args = {
        src: "light.jpg",
        darkModeSrc: "dark.jpg",
        forceDarkMode: false,
        sm,
        md,
        lg,
      };

      it("when forceDarkMode false should return an object with light images", () => {
        const obj = parseImageSources(args);
        expect(obj).toStrictEqual({
          md: "light_md.jpg",
          lg: "light_lg.jpg",
          sm: "light_sm.jpg",
          xs: "light.jpg",
        });
      });

      it("when forceDarkMode true should return an object with dark images", () => {
        const obj = parseImageSources({ ...args, forceDarkMode: true });
        expect(obj).toStrictEqual({
          xs: "dark.jpg",
          sm: "dark_sm.jpg",
          md: "dark_md.jpg",
          lg: "dark_lg.jpg",
        });
      });

      it("when forceDarkMode false should return an object with light images, if missing return the fallback", () => {
        const obj = parseImageSources({
          ...args,
          src: undefined,
          lg: { darkModeSrc: "dark_lg.jpg" },
        });
        expect(obj).toStrictEqual({
          md: "light_md.jpg",
          lg: "dark_lg.jpg",
          sm: "light_sm.jpg",
          xs: "light_sm.jpg",
        });
      });

      it("when forceDarkMode true should return an object with dark images, if missing return the fallback", () => {
        const obj = parseImageSources({
          ...args,
          forceDarkMode: true,
          darkModeSrc: undefined,
          md: { src: "light_md.jpg" },
        });
        expect(obj).toStrictEqual({
          xs: "dark_sm.jpg",
          sm: "dark_sm.jpg",
          md: "light_md.jpg",
          lg: "dark_lg.jpg",
        });
      });
    });
  });
});
