import type { YouTubeLiveChatProps } from "./youtube-live-chat.types";

import classNames from "classnames";

import Text from "@/components/typographies/Text";

const YouTubeLiveChat = ({
  className,
  domain = "mesalva.com",
  height = "380px",
  messageError = "Não foi possível estabelecer conexão com o chat",
  messageMobile = "Não é possível exibir o chat em dispositivos móveis",
  src,
  videoId,
  width = "100%",
  ...props
}: YouTubeLiveChatProps) => {
  const cn = classNames("youtube-live-chat", className);

  let videoLink;
  if (!src && !videoId) return <Text data-testid="messageError">{messageError}</Text>;
  if (!src) videoLink = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${domain}`;
  else videoLink = src;

  return (
    <div className={cn}>
      <iframe
        data-testid="iframe"
        src={videoLink}
        style={{ width, height }}
        className={cn}
        {...props}
      ></iframe>
      <Text data-testid="messageMobile">{messageMobile}</Text>
    </div>
  );
};

export default YouTubeLiveChat;
