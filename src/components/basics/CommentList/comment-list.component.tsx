import type { CommentListProps } from "./comment-list.types";

import classNames from "classnames";
import { useState } from "react";

import Button from "@/components/basics/Button";
import CommentItem from "@/components/basics/CommentItem";
import Icon from "@/components/basics/Icon";
import AreaField from "@/components/forms/AreaField";
import Heading from "@/components/typographies/Heading";
import Text from "@/components/typographies/Text";

const CommentList = ({
  className,
  list = [],
  disabled,
  error,
  info,
  success,
  emptyMessage,
  comment = "",
  showCommentBox = false,
  onComment,
  onChange,
  ...props
}: CommentListProps) => {
  const cn = classNames("comment-list", className);
  const [value, setValue] = useState(comment);
  const [show, setShow] = useState(showCommentBox);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const value = event.target.value;
    setValue(event.target.value);
    onChange?.(value);
  };

  const toggleShow = () => setShow((show) => !show);

  const handleComment = async () => {
    if (typeof onComment === "function") await onComment(value);
    setValue("");
    setShow(false);
  };

  return (
    <div className={cn} {...props}>
      {!show ? (
        <Button
          className="comment-list__button-add-commentary"
          onClick={toggleShow}
          disabled={disabled}
          data-testid="add-comment-button"
        >
          Adicionar comentário
        </Button>
      ) : (
        <div className="comment-list__box" data-testid="comment-box">
          <div className="comment-list__box__header">
            <Heading size="sm" className="comment-list__box__header__title">
              Adicionar comentário
            </Heading>
            <Icon name="close" className="comment-list__box__header__close" onClick={toggleShow} />
          </div>
          <AreaField
            label="Escreva aqui seu comentário"
            error={error}
            className="comment-list__box__area-field"
            disabled={disabled}
            onChange={handleChange}
            value={value}
            info={info}
            success={success}
            data-testid="comment-area-field"
          />
          <div className="comment-list__box__button-comment-wrapper">
            <Button
              onClick={handleComment}
              disabled={disabled || value.length < 3}
              data-testid="comment-button"
            >
              Comentar
            </Button>
          </div>
        </div>
      )}

      {list.length === 0 ? (
        <Text className="comment-list__empty-message" size="sm">
          {emptyMessage}
        </Text>
      ) : (
        list.map((comment, index) => (
          <CommentItem data-testid="comment-item" key={`comment-item-${index}`} {...comment} />
        ))
      )}
    </div>
  );
};

export default CommentList;
