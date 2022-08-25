import type { CommentItemProps } from "./comment-item.types";

import classNames from "classnames";

import Avatar from "@/components/basics/Avatar";
import Divider from "@/components/basics/Divider";
import Caption from "@/components/typographies/Caption";
import Subtitle from "@/components/typographies/Subtitle";
import Text from "@/components/typographies/Text";

const CommentItem = ({ className, thumbnail, name, date, comment, ...props }: CommentItemProps) => {
  const cn = classNames("comment-item", className);

  return (
    <div className={cn} {...props}>
      <Avatar name={name} className="comment-item__avatar" size="md" thumbnail={thumbnail} />
      <div className="comment-item__content">
        <div className="comment-item__content__header-wrapper">
          <div className="comment-item__content__header-wrapper__header">
            <Subtitle size="md">{name}</Subtitle>
            <Caption className="comment-item__content__header-wrapper__header__date">
              {date}
            </Caption>
          </div>
        </div>
        <Text className="comment-item__content__text">{comment}</Text>
        <Divider className="comment-item__content__divider" />
      </div>
    </div>
  );
};

export default CommentItem;
