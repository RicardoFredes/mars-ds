import React, { Component } from "react";

import { LinkBaseComponent } from "@/components/primitives/LinkBase";
import { LinkContext } from "@/components/primitives/LinkBase/link-base.context";

interface State {
  link: LinkBaseComponent | undefined;
}

export interface AppProviderProps {
  /** A custom component to use for all links used by Polaris components */
  linkComponent?: LinkBaseComponent;
  /** Inner content of the application */
  children?: React.ReactNode;
}

class AppProvider extends Component<AppProviderProps, State> {
  constructor(props: AppProviderProps) {
    super(props);
    const { linkComponent } = this.props;

    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      link: linkComponent,
    };
  }

  componentDidUpdate({ linkComponent: prevLinkComponent }: AppProviderProps) {
    const { linkComponent } = this.props;

    if (linkComponent === prevLinkComponent) {
      return;
    }

    this.setState({
      link: linkComponent,
    });
  }

  setBodyStyles = () => {
    document.body.style.backgroundColor = "var(--p-background)";
    document.body.style.color = "var(--p-text)";
  };

  render() {
    const { children } = this.props;

    const { link } = this.state;

    return <LinkContext.Provider value={link}>{children}</LinkContext.Provider>;
  }
}

export default AppProvider;
