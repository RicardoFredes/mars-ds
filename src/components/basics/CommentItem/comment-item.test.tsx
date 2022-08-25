import type { CommentItemProps } from "./comment-item.types";

import { render } from "@testing-library/react";

import CommentItem from "./comment-item.component";

const mockedProps = {
  name: "User Name",
  date: "Hoje, 15:31",
  comment: "Any comment",
  thumbnail: "any_image.jpg",
};

const makeSut = (props: CommentItemProps) => render(<CommentItem {...props} />);

describe("<CommentItem>", () => {
  it("should render component", () => {
    const wrapper = makeSut(mockedProps);
    wrapper.getByText(mockedProps.name);
    wrapper.getByText(mockedProps.date);
    wrapper.getByText(mockedProps.comment);
  });
});
