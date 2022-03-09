import type { SidebarItemProps, SidebarProps } from "./sidebar.types";

import classNames from "classnames";

import Avatar from "@/components/basics/Avatar";
import Button, { ButtonSizes, ButtonVariants } from "@/components/basics/Button";
import Card from "@/components/basics/Card";
import Logo from "@/components/basics/Logo";
import ToggleButton from "@/components/basics/ToggleButton";
import Subtitle from "@/components/typographics/Subtitle";

const Sidebar = ({
  className,
  user,
  sidebarList,
  onLogoClick,
  onCloseClick,
  onProfileClick,
  ...props
}: SidebarProps) => {
  const cn = classNames("sidebar", className);

  return (
    <aside className={cn} {...props}>
      <header className="sidebar__header">
        <Logo height={32} className="sidebar__logo" onClick={onLogoClick} />
        <ToggleButton
          variant="text"
          iconName="close"
          className="sidebar__close"
          id="close-button"
          onClick={onCloseClick}
        />
      </header>

      <Card className="sidebar__profile-container">
        <Avatar
          data-testid="sidebar__user-avatar"
          className="sidebar__profile-container__avatar"
          thumbnail={user?.image}
          name={user?.name}
        />
        <div className="flex-column align-items-start">
          <Subtitle data-testid="sidebar__user-name">{user?.name}</Subtitle>
          <button onClick={onProfileClick} className="sidebar__profile-container__profile-link">
            Ver perfil
          </button>
        </div>
      </Card>

      {sidebarList.map(({ label, items }) => (
        <div key={label}>
          <p className="sidebar__list-title" data-testid="sidebar__title">
            {label}
          </p>
          {items.map((sidebarItem, index) => (
            <SidebarItem
              key={`sidebar-item-${index}`}
              {...sidebarItem}
              data-testid="sidebar__item"
            />
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

const SidebarItem = ({
  label,
  icon,
  className,
  isActive = false,
  onClick,
  ...props
}: SidebarItemProps) => {
  const cn = classNames("sidebar-item", { "sidebar-item--is-active": isActive }, className);

  return (
    <Button
      variant={ButtonVariants.Text}
      className={cn}
      iconName={icon.name}
      size={ButtonSizes.Medium}
      label={label}
      onClick={onClick}
      {...props}
    />
  );
};
