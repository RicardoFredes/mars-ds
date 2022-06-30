import type { EmbedProps } from "./embed.types";

import { render } from "@testing-library/react";

import { ButtonVariants } from "../Button";
import Embed from "./embed.component";
import { EmbedSizes } from "./embed.types";

const makeSut = (props?: EmbedProps) => render(<Embed {...props} />);

describe("<Embed>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render component with basic props", () => {
    const wrapper = makeSut({
      src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component with advanced props", () => {
    const wrapper = makeSut({
      src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
      textButton: "Download",
      size: EmbedSizes.Landscape,
      variantButton: ButtonVariants.Naked,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should put specific className in button when "variantButton" is selected', () => {
    const wrapper = makeSut({
      src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
      variantButton: ButtonVariants.Text,
    });
    const element = wrapper.getByTestId("button");
    expect(element).toHaveAttribute("class", "link btn btn--text btn--size-sm link--primary");
  });

  it('should put specific text in button when property "textButton" is not default', () => {
    const wrapper = makeSut({
      src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
      textButton: "Download",
    });
    const element = wrapper.getByTestId("button");
    expect(element).toHaveTextContent("Download");
  });

  it('should put specific text in "messageDownload" property', () => {
    const wrapper = makeSut({
      src: "https://cdn.mesalva.com/uploads/regulamentos/regulamento-resgate-de-livros-e-apostilas-v14.pdf",
      messageDownload: "Faça o download",
    });
    const element = wrapper.getByTestId("text");
    expect(element).toHaveTextContent("Faça o download");
  });
});
