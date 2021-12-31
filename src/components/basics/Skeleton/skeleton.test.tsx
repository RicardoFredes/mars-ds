import { render } from "@testing-library/react";
import Skeleton from ".";
import { SkeletonProps } from "./skeleton.types";

const makeSut = (props?: SkeletonProps) => render(<Skeleton {...props} />);

describe("<Skeleton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
