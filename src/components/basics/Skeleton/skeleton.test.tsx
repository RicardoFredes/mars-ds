import type { SkeletonProps } from "./skeleton.types";

import { render } from "@testing-library/react";

import Skeleton from "./skeleton.component";
import { SkeletonVariants } from "./skeleton.types";

const makeSut = (props?: SkeletonProps) =>
  render(<Skeleton data-testid={PROPS.TEST_ID} {...props} />);

const PROPS = {
  TEST_ID: "skeleton",
  PARAGRAPH: "skeleton-paragraph",
};

const classNameLabel = {
  isCircle: "skeleton skeleton--is-circle",
  isDefault: "skeleton skeleton--is-default",
  isParagraph: "skeleton skeleton--is-paragraph",
};

describe("<Skeleton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("should render if active is true", () => {
    const { queryByTestId } = makeSut({ active: true });
    const skeleton = queryByTestId(PROPS.TEST_ID);
    expect(skeleton).toBeTruthy();
  });

  it("should not render if active is false", () => {
    const { queryByTestId } = makeSut({ active: false });
    const skeleton = queryByTestId(PROPS.TEST_ID);
    expect(skeleton).toBeNull();
  });

  it("should render default if variant is default", () => {
    const { getByTestId } = makeSut({ variant: SkeletonVariants.Default, active: true });
    const skeleton = getByTestId(PROPS.TEST_ID);
    expect(skeleton?.className).toBe(classNameLabel.isDefault);
  });

  it("should render circle if variant is circle", () => {
    const { queryByTestId } = makeSut({ variant: SkeletonVariants.Circle, active: true });
    const skeleton = queryByTestId(PROPS.TEST_ID);
    expect(skeleton?.className).toBe(classNameLabel.isCircle);
  });

  it("should render paragraph if variant is paragraph", () => {
    const { getAllByTestId } = makeSut({ variant: SkeletonVariants.Paragraph, active: true });
    const skeletonParagraph = getAllByTestId(PROPS.PARAGRAPH);
    expect(skeletonParagraph).toHaveLength(4);
  });

  it("should render with provided height and width", () => {
    const { queryByTestId } = makeSut({ height: 100, width: 100, active: true });
    const skeleton = queryByTestId(PROPS.TEST_ID);
    expect(skeleton?.style.height).toBe("100px");
    expect(skeleton?.style.width).toBe("100px");
  });
});
