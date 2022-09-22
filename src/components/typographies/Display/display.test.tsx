import type { DisplayProps } from "./display.types";

import { render } from "@testing-library/react";

import Display from "./display.component";

const makeSut = (props?: DisplayProps) => render(<Display {...props} />);

describe("<Display>", () => {
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

  it("should render h1 when not passing level", () => {
    const { container } = makeSut({});
    const heading = container.querySelector("h1");
    expect(heading).toBeTruthy();
  });

  it("should can morph", () => {
    const { container } = makeSut({ as: "i" });
    const i = container.querySelector("i");
    expect(i).toBeTruthy();
  });
});
