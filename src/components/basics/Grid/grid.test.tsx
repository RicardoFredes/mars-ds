import type { GridProps } from "./grid.types";

import { render } from "@testing-library/react";

import Grid from "./grid.component";

const makeSut = (props?: GridProps) => render(<Grid {...props} />);

describe("<Grid>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toMatchSnapshot();
  });

  describe("grid with number columns", () => {
    it("render with number columns", () => {
      const wrapper = makeSut({
        columns: 2,
      });
      expect(wrapper).toMatchSnapshot();
    });
    it("verify style into grid", () => {
      const wrapper = makeSut({
        columns: 2,
      });
      const element = wrapper.getByTestId("grid");
      expect(element).toHaveAttribute(
        "style",
        "--columns-xs: repeat(2, 1fr); --columns-sm: repeat(2, 1fr); --columns-md: repeat(2, 1fr); --columns-lg: repeat(2, 1fr);"
      );
    });
    it("verify classnames into grid", () => {
      const wrapper = makeSut({
        columns: 2,
        growing: false,
      });
      const element = wrapper.getByTestId("grid");
      expect(element).toHaveAttribute("class", "grid");
    });
    it("verify classnames gap into grid", () => {
      const wrapper = makeSut({
        columns: 3,
        gap: 10,
      });
      const element = wrapper.getByTestId("grid");
      expect(element).toHaveAttribute(
        "style",
        "--gap: 10px; --columns-xs: repeat(3, 1fr); --columns-sm: repeat(3, 1fr); --columns-md: repeat(3, 1fr); --columns-lg: repeat(3, 1fr);"
      );
    });
    it("render with gap property", () => {
      const wrapper = makeSut({
        columns: 2,
        gap: 10,
      });
      expect(wrapper).toMatchSnapshot();
    });
    it("verify classnames growing into grid", () => {
      const wrapper = makeSut({
        columns: 2,
        growing: true,
      });
      const element = wrapper.getByTestId("grid");
      expect(element).toHaveAttribute("class", "grid grid--growing");
    });
    it("render with growing property", () => {
      const wrapper = makeSut({
        columns: 2,
        gap: 10,
        growing: false,
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("grid with string columns", () => {
    it("render with string columns", () => {
      const wrapper = makeSut({
        columns: "200px 1fr",
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("grid with object columns", () => {
    it("render with object columns", () => {
      const wrapper = makeSut({
        columns: { md: 2, lg: 3 },
      });
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("grid with array columns", () => {
    it("render with array columns", () => {
      const wrapper = makeSut({
        columns: [1, 2],
      });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
