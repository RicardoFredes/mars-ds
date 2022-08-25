import type { ComponentItem } from "@/types";

export interface CommentItemProps extends ComponentItem {
  thumbnail?: string;
  name?: string;
  date?: string;
  comment?: string;
}
