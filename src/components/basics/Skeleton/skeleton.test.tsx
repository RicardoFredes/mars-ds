import type { SkeletonProps } from "./skeleton.types";

import { render } from "@testing-library/react";

import Skeleton from "./skeleton.component";

const makeSut = (props?: SkeletonProps) => render(<Skeleton {...props} />);

describe("<Skeleton>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });
});
