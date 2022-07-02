import type { YouTubeLiveChatProps } from "./youtube-live-chat.types";

import { render } from "@testing-library/react";

import YoutubeLiveChat from "./youtube-live-chat.component";

const makeSut = (props?: YouTubeLiveChatProps) => render(<YoutubeLiveChat {...props} />);

describe("<YoutubeLiveChat>", () => {
  it("should render component", () => {
    const wrapper = makeSut();
    expect(wrapper).toBeTruthy();
  });

  it('should render component with "domain" and "videoId" props', () => {
    const wrapper = makeSut({
      domain: "localhost",
      videoId: "AmdW4DdvcQE",
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with "src" props', () => {
    const wrapper = makeSut({
      src: "https://www.youtube.com/live_chat?v=AmdW4DdvcQE&embed_domain=localhost",
    });
    expect(wrapper).toMatchSnapshot();
  });

  it("should render component with advanced props", () => {
    const wrapper = makeSut({
      domain: "localhost",
      height: "250px",
      videoId: "AmdW4DdvcQE",
      width: "250px",
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should display specific text when property "videoId" or "src" is not input', () => {
    const wrapper = makeSut({
      messageError: "Não foi possível estabelecer conexão com o chat",
    });
    const element = wrapper.getByTestId("messageError");
    expect(element).toHaveTextContent("Não foi possível estabelecer conexão com o chat");
  });
});
