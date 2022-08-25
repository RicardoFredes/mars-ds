import type { CommentListProps } from "./comment-list.types";

import { fireEvent, render } from "@testing-library/react";

import { makeArray } from "@/services";

import CommentList from "./comment-list.component";

const makeSut = (props?: CommentListProps) => render(<CommentList {...props} />);

describe("<CommentList>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it("hide add comment box", () => {
    const { queryAllByText } = makeSut();
    const commentBox = queryAllByText("Escreva aqui seu comentário");
    expect(commentBox).toHaveLength(0);
  });

  it("show comment box on click to add comment", () => {
    const { getByTestId, getByLabelText } = makeSut();
    const addCommentButton = getByTestId("add-comment-button");
    fireEvent.click(addCommentButton);
    getByLabelText("Escreva aqui seu comentário");
    getByTestId("comment-area-field");
  });

  it("call `onComment` with textarea value", () => {
    const onCommentSpy = jest.fn();
    const mockedComment = "any_comment";
    const { getByTestId } = makeSut({ onComment: onCommentSpy });

    const addCommentButton = getByTestId("add-comment-button");
    fireEvent.click(addCommentButton);

    const textarea = getByTestId("comment-area-field");
    fireEvent.change(textarea, { target: { value: mockedComment } });

    const buttonComment = getByTestId("comment-button");
    fireEvent.click(buttonComment);

    expect(onCommentSpy).toBeCalledTimes(1);
    expect(onCommentSpy).toBeCalledWith(mockedComment);
  });

  it("show comments", async () => {
    const length = 5;
    const mockedList = makeArray(length).map((_, key) => ({
      name: `name_${key + 1}`,
      date: `date_${key + 1}`,
      comment: `comment_${key + 1}`,
    }));
    const emptyMessage = "empty_message";
    const wrapper = makeSut({ list: mockedList, emptyMessage });
    const { getAllByTestId, queryByText } = wrapper;
    const comments = getAllByTestId("comment-item");
    expect(comments).toHaveLength(length);
    expect(queryByText(emptyMessage)).toBeNull();
  });

  it("show empty message", () => {
    const emptyMessage = "empty_message";
    const { getByText } = makeSut({ emptyMessage });
    getByText(emptyMessage);
  });
});
