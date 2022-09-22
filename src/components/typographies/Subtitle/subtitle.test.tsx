import type { SubtitleProps } from "./subtitle.types";

import { render } from "@testing-library/react";

import Subtitle from "./subtitle.component";

const makeSut = (props?: SubtitleProps) => render(<Subtitle {...props} />);

describe("<Subtitle>", () => {
  it("should accept children", () => {
    const children = "any_children";
    const { getByText } = makeSut({ children });
    getByText(children);
  });

  it("should render html", () => {
    const html = "<b>any_html_with_b_tag</b>";
    const { getByText, container } = makeSut({ html });
    getByText("any_html_with_b_tag");
    const bold = container.querySelector("b");
    expect(bold).toBeTruthy();
  });

  it.each(Array.from({ length: 6 }, (_, k) => k + 1))(
    "passing level %s should render respective heading",
    (level) => {
      const { container } = makeSut({ level });
      const heading = container.querySelector(`h${level}`);
      expect(heading).toBeTruthy();
    }
  );

  it("should render h3 when not passing level", () => {
    const { container } = makeSut({});
    const heading = container.querySelector("h3");
    expect(heading).toBeTruthy();
  });

  it("should can morph", () => {
    const { container } = makeSut({ as: "i" });
    const i = container.querySelector("i");
    expect(i).toBeTruthy();
  });
});
