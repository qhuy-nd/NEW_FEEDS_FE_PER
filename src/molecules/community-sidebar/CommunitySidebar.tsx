import { Compass, Pin, Search, Settings2, UserRound, UsersRound } from "lucide-react";
import Avatar from "../../atoms/avatar";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import Typography from "../../atoms/typography";

export type CommunityGroupItem = {
  id: string;
  name: string;
  membersLabel?: string;
  avatarUrl?: string;
};

export type CommunitySidebarProps = {
  pinnedGroups: CommunityGroupItem[];
  joinedGroups: CommunityGroupItem[];
  isLoading?: boolean;
};

const CommunitySidebar = ({ pinnedGroups, joinedGroups, isLoading }: CommunitySidebarProps) => {
  return (
    <aside className="community-sidebar">
      <Input aria-label="Tìm kiếm nhóm" placeholder="Tìm kiếm nhóm..." rightIcon={Search} />

      <Button type="button" variant="secondary" className="community-sidebar__create">
        <UsersRound size={18} />
        Tạo nhóm mới
      </Button>

      <section className="community-sidebar__section">
        <div className="community-sidebar__section-head">
          <div className="community-sidebar__label">
            <Pin size={18} />
            <Typography as="span" weight="semibold">Nhóm đã ghim</Typography>
          </div>
          <Button type="button" variant="default" className="community-sidebar__edit">
            Chỉnh sửa
          </Button>
        </div>

        {isLoading && <Typography as="p" className="community-sidebar__empty">Đang tải nhóm...</Typography>}
        {!isLoading && pinnedGroups.map((group) => (
          <GroupRow key={group.id} group={group} />
        ))}
      </section>

      <section className="community-sidebar__section">
        <MenuRow icon={<UserRound size={20} />} label="Nhóm của tôi" />
        <MenuRow icon={<Settings2 size={20} />} label="Nhóm tôi quản lý" />
        <MenuRow icon={<Compass size={20} />} label="Khám phá" />
      </section>

      <section className="community-sidebar__section community-sidebar__section--scroll">
        {joinedGroups.map((group) => (
          <GroupRow key={group.id} group={group} />
        ))}
      </section>
    </aside>
  );
};

const MenuRow = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <Button type="button" variant="default" className="community-sidebar__menu-row">
    {icon}
    {label}
  </Button>
);

const GroupRow = ({ group }: { group: CommunityGroupItem }) => (
  <Button type="button" variant="default" className="community-sidebar__group">
    <Avatar
      src={group.avatarUrl}
      alt={group.name}
      fallback={group.name}
      size="lg"
      shape="square"
    />
    <span className="community-sidebar__group-text">
      <Typography as="span" weight="semibold" className="community-sidebar__group-name">
        {group.name}
      </Typography>
      {group.membersLabel && (
        <Typography as="small" className="community-sidebar__group-meta">
          {group.membersLabel}
        </Typography>
      )}
    </span>
  </Button>
);

export default CommunitySidebar;
