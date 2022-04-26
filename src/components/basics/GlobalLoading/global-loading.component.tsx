import type { GlobalLoadingProps } from "./global-loading.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Loader from "@/components/basics/Loader";
import Logo, { LogoNames } from "@/components/basics/Logo";
import Text from "@/components/typographics/Text";

import { defaultPhrases } from "./global-loading.helpers";

const GlobalLoading = ({ isLoading, ...props }: GlobalLoadingProps) => {
  if (!isLoading) return null;
  return <GlobalLoadingContent {...props} />;
};

const GlobalLoadingContent = ({ className, phrases = defaultPhrases }: GlobalLoadingProps) => {
  const cn = classNames("global-loading", className);

  const [position, setPosition] = useState(0);

  const changePosition = () => {
    const newPosition = position + 1;
    if (newPosition < phrases.length) setPosition(newPosition);
  };

  useEffect(() => {
    const timer = setTimeout(changePosition, 3000);
    return () => clearTimeout(timer);
  }, [position]);

  const transform = `translateY(${position * -100}%)`;

  return (
    <div className={cn}>
      <div className="global-loading__container">
        <Logo className="global-loading__brand" name={LogoNames.Short} height={32} />
        <Loader className="global-loading__loader" size="lg" />
      </div>
      <div className="global-loading__phrases text-center">
        {phrases.map((phrase, key) => (
          <Text key={key} style={{ transform, margin: 0 }}>
            {phrase}...
          </Text>
        ))}
      </div>
    </div>
  );
};

export default GlobalLoading;
