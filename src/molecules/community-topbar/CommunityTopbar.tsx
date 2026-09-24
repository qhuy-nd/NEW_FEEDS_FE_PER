import { Bell, LogOut, Plus, Search } from "lucide-react";
import Avatar from "../../atoms/avatar";
import Button from "../../atoms/button";
import Input from "../../atoms/input";
import Typography from "../../atoms/typography";

export type CommunityTopbarProps = {
  userName?: string;
  avatarUrl?: string;
  onLogout?: () => void;
};

const CommunityTopbar = ({ userName, avatarUrl, onLogout }: CommunityTopbarProps) => {
  return (
    <header className="community-topbar">
      <div className="community-topbar__brand">
        <span className="community-topbar__mark" aria-hidden="true" />
        <Typography as="span" weight="bold" className="community-topbar__brand-text">
          MGE
        </Typography>
      </div>

      <div className="community-topbar__search">
        <Input
          aria-label="Tìm kiếm"
          placeholder="Tìm kiếm mọi thứ trên đây..."
          leftIcon={Search}
        />
      </div>

      <nav className="community-topbar__nav" aria-label="Điều hướng chính">
        <Button type="button" variant="default" className="community-topbar__nav-link">
          Cộng đồng
        </Button>
        <Button type="button" variant="default" className="community-topbar__nav-link">
          Khóa học
        </Button>
        <Button type="button" variant="default" className="community-topbar__create">
          <Plus size={18} />
          Tạo
        </Button>
        <Button type="button" iconOnly variant="default" aria-label="Thông báo">
          <Bell size={20} />
        </Button>
        <Avatar
          src={avatarUrl}
          alt={userName ?? "Người dùng"}
          fallback={userName ?? "MGE"}
          size="md"
          shape="circle"
        />
        {onLogout && (
          <Button type="button" iconOnly variant="default" aria-label="Đăng xuất" onClick={onLogout}>
            <LogOut size={18} />
          </Button>
        )}
      </nav>
    </header>
  );
};

export default CommunityTopbar;
