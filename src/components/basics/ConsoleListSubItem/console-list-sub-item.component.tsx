import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Text from "@/components/typographies/Text";
import { ICONS } from "@/configs/icons.config";

const ConsoleListSubItem = ({
  title,
  isAnswered,
  isCorrect,
  isActive,
  showAnswer,
  LinkComponent,
  className,
  ...props
}: ConsoleListSubItemProps) => {
  const isCorrectAnswer = isAnswered && isCorrect;
  const isWrongAnswer = isAnswered && !isCorrect;

  const cn = classNames(className, "console-list-sub-item", {
    "console-list-sub-item--is-answered": isAnswered && !isActive,
    "console-list-sub-item--is-active": !isAnswered && isActive,
    "console-list-sub-item--is-answered-and-active": isAnswered && isActive,
    "console-list-sub-item--is-unanswered": showAnswer && !isAnswered,
    "console-list-sub-item--is-correct": showAnswer && isCorrectAnswer,
    "console-list-sub-item--is-wrong": showAnswer && isWrongAnswer,
  });

  const Component = LinkComponent || "a";

  return (
    <Component className={cn} data-testid="console-list-sub-item" {...props}>
      <span className="console-list-sub-item__dot" />

      <div className="console-list-sub-item__content">
        <Text as="h2">{title}</Text>
      </div>

      {showAnswer && (
        <Icon
          className="console-list-sub-item__answer-icon"
          name={isCorrectAnswer ? ICONS.STATUS.CORRECT : ICONS.STATUS.INCORRECT}
        />
      )}
    </Component>
  );
};

export default ConsoleListSubItem;
