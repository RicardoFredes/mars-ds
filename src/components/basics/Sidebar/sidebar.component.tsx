import type { SidebarItemProps, SidebarProps } from "./sidebar.types";

import classNames from "classnames";

import Avatar from "@/components/basics/Avatar";
import Card from "@/components/basics/Card";
import Link from "@/components/basics/Link";
import Logo from "@/components/basics/Logo";
import ToggleButton from "@/components/basics/ToggleButton";
import Subtitle from "@/components/typographics/Subtitle";

import Button, { ButtonVariants } from "../Button";
import Icon from "../Icon";

const Sidebar = ({
  className,
  currentPathname,
  user = {},
  sidebarList,
  onCloseClick,
  links = {},
  LinkComponent,
  ...props
}: SidebarProps) => {
  const cn = classNames("sidebar", className);
  const defaultLoginLink = "https://mesalva.com/entrar";
  const defaultSignUpLink = "https://mesalva.com/cadastro";

  return (
    <aside className={cn} {...props}>
      <header className="sidebar__header">
        <Link as={LinkComponent} className="sidebar__logo" {...links.brand}>
          <Logo height={32} />
        </Link>
        <ToggleButton
          variant="text"
          iconName="close"
          className="sidebar__close"
          id="close-button"
          onClick={onCloseClick}
        />
      </header>

      {!user.guest ? (
        <Card className="sidebar__profile-container">
          <Avatar
            data-testid="sidebar__user-avatar"
            className="sidebar__profile-container__avatar"
            thumbnail={user.image}
            name={user.name}
          />
          <div className="flex-column align-items-start">
            <Subtitle data-testid="sidebar__user-name">{user.name}</Subtitle>
            <Link
              as={LinkComponent}
              className="sidebar__profile-container__profile-link"
              {...links.profile}
            >
              Ver perfil
            </Link>
          </div>
        </Card>
      ) : (
        <div className="sidebar__guest">
          <Button
            as={LinkComponent}
            label="Cadastrar"
            className="sidebar__guest__button"
            href={defaultSignUpLink}
            id="sidebar-signup-button"
            {...links.signup}
          />

          <Button
            as={LinkComponent}
            label="Entrar"
            className="sidebar__guest__button"
            variant={ButtonVariants.Secondary}
            href={defaultLoginLink}
            id="sidebar-login-button"
            {...links.login}
          />
        </div>
      )}

      {sidebarList.map(({ label, items }) => (
        <div key={label}>
          <p className="sidebar__list-title" data-testid="sidebar__title">
            {label}
          </p>
          {items.map((item, index) => (
            <SidebarItem
              as={LinkComponent}
              data-testid="sidebar__item"
              key={`sidebar-item-${index}`}
              isActive={isItemActive(item.href, currentPathname)}
              {...item}
            />
          ))}
        </div>
      ))}
    </aside>
  );
};

const isItemActive = (pathname = "", reference = "") => {
  if (/^https?/.test(pathname)) return false;
  const [p1, p2] = removeFirstSlash(pathname).split("/");
  const [r1, r2] = removeFirstSlash(reference).split("/");
  const active1 = p1 === r1;
  if (!p2) return active1;
  const active2 = p2 === r2;
  return active1 && active2;
};

const removeFirstSlash = (pathname: string) => (pathname[0] === "/" ? pathname.slice(1) : pathname);

const SidebarItem = ({
  label,
  iconName = "square",
  className,
  isActive = false,
  ...props
}: SidebarItemProps) => {
  const cn = classNames("sidebar-item", { "sidebar-item--is-active": isActive }, className);
  return (
    <Link className={cn} {...props}>
      <Icon name={iconName} />
      {label}
    </Link>
  );
};

export default Sidebar;
