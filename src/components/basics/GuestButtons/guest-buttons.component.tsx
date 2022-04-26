import type { GuestButtonsProps } from "./guest-buttons.types";

import classNames from "classnames";

import Button, { ButtonVariants } from "../Button";

const GuestButtons = ({ className, links = {}, LinkComponent, ...props }: GuestButtonsProps) => {
  const cn = classNames("guest-buttons", className);
  const defaultLoginLink = "https://mesalva.com/entrar";
  const defaultSignUpLink = "https://mesalva.com/cadastro";

  return (
    <div className={cn} {...props}>
      <Button
        as={LinkComponent}
        label="Cadastrar"
        className="guest-buttons__button"
        href={defaultSignUpLink}
        id="sidebar-signup-button"
        {...links.signup}
      />

      <Button
        as={LinkComponent}
        label="Entrar"
        className="guest-buttons__button"
        variant={ButtonVariants.Secondary}
        href={defaultLoginLink}
        id="sidebar-login-button"
        {...links.login}
      />
    </div>
  );
};

export default GuestButtons;
