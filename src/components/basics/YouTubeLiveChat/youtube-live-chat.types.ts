interface YouTubeLiveChatProps extends React.HTMLProps<HTMLIFrameElement> {
  domain?: string;
  height?: string;
  messageError?: string;
  messageMobile?: string;
  src?: string;
  videoId?: string;
  width?: string;
}

export type { YouTubeLiveChatProps };
