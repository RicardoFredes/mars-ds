import type { SidebarItemProps, SidebarProps } from "./sidebar.types";

import classNames from "classnames";

import Avatar from "@/components/basics/Avatar";
import Card from "@/components/basics/Card";
import GuestButtons from "@/components/basics/GuestButtons";
import Icon from "@/components/basics/Icon";
import Image from "@/components/basics/Image";
import Link from "@/components/basics/Link";
import Logo from "@/components/basics/Logo";
import ToggleButton from "@/components/basics/ToggleButton";
import Heading from "@/components/typographies/Heading";
import { ICONS } from "@/configs/icons.config";

import SidebarSkeleton from "./sidebar-skeleton.component";

const Sidebar = ({
  brand,
  className,
  currentPathname,
  user = {},
  sidebarList,
  onCloseClick,
  links = {},
  LinkComponent,
  fetching,
  ...props
}: SidebarProps) => {
  const cn = classNames("sidebar", { "pb-xl": fetching }, className);

  return (
    <aside className={cn} {...props}>
      <header className="sidebar__header">
        <Link as={LinkComponent} className="sidebar__logo" {...links.brand}>
          {brand ? <Image height={32} {...brand} /> : <Logo height={32} />}
        </Link>
        <ToggleButton
          variant="text"
          iconName={ICONS.ACTIONS.CLOSE}
          className="sidebar__close"
          id="close-button"
          onClick={onCloseClick}
        />
      </header>
      {fetching ? (
        <SidebarSkeleton user={user} links={links} LinkComponent={LinkComponent} />
      ) : (
        <>
          {!user.guest ? (
            <Card className="sidebar__profile-container">
              <Avatar
                data-testid="sidebar__user-avatar"
                className="sidebar__profile-container__avatar"
                thumbnail={user.image}
                name={user.name}
              />
              <div className="flex-column align-items-start">
                <Heading data-testid="sidebar__user-name" size="sm">
                  {user.name}
                </Heading>
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
            <GuestButtons
              LinkComponent={LinkComponent}
              links={links}
              className="sidebar__guest"
              data-testid="sidebar__guest"
            />
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
        </>
      )}
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
