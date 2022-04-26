import type { SidebarProps } from "./sidebar.types";

import Card from "@/components/basics/Card";
import { makeArray } from "@/services/makeArray";

import GuestButtons from "../GuestButtons";
import Skeleton, { SkeletonVariants } from "../Skeleton";

type SidebarSkeletonProps = Pick<SidebarProps, "user" | "links" | "LinkComponent">;

const sidebarSkeletonList = makeArray(3, {
  label: null,
  items: makeArray(2, null),
});

const SidebarSkeleton = ({ user = {}, links, LinkComponent }: SidebarSkeletonProps) => {
  return (
    <div data-testid="sidebar__skeleton">
      {!user.guest ? (
        <Card className="sidebar__profile-container">
          <Skeleton
            variant={SkeletonVariants.Circle}
            active
            width={40}
            height={40}
            className="sidebar__profile-container__avatar"
          />
          <div className="flex-column align-items-start">
            <Skeleton active height={24} width={100} className="mb-xs" />
            <Skeleton
              active
              height={16}
              width={60}
              className="sidebar__profile-container__profile-link"
            />
          </div>
        </Card>
      ) : (
        <GuestButtons LinkComponent={LinkComponent} links={links} data-testid="sidebar__guest" />
      )}

      {sidebarSkeletonList.map(({ label, items }) => (
        <div key={label} className="mt-xl">
          <Skeleton active className="mx-lg mb-lg" width={80} height={20} />
          {items.map(() => (
            <Skeleton
              key={Math.floor(Math.random() * 100)}
              active
              className="ml-lg mb-lg"
              height={45}
              width="80%"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SidebarSkeleton;
