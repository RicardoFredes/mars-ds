import type { CommentItemProps } from "../CommentItem";
import type { ReactNode } from "react";

import type { ComponentCommon } from "@/types";

export interface CommentListProps extends ComponentCommon {
  list?: CommentItemProps[];
  onComment?: (comment: string) => Promise<void>;
  disabled?: boolean;
  error?: string | boolean;
  success?: boolean;
  info?: string | ReactNode;
  emptyMessage?: string;
  showCommentBox?: boolean;
  onChange?: (value: string) => void;
  comment?: string;
}
