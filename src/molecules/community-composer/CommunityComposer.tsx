import { Plus } from "lucide-react";
import Avatar from "../../atoms/avatar";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

export type CommunityComposerProps = {
  userName?: string;
  avatarUrl?: string;
};

const CommunityComposer = ({ userName, avatarUrl }: CommunityComposerProps) => {
  return (
    <section className="community-composer" aria-label="Tạo bài viết">
      <Avatar
        src={avatarUrl}
        alt={userName ?? "Người dùng"}
        fallback={userName ?? "MGE"}
        size="lg"
        shape="circle"
      />
      <Typography as="span" className="community-composer__placeholder">
        Chia sẻ, hỏi đáp, xin góp ý từ cộng đồng
      </Typography>
      <Button type="button" iconOnly variant="secondary" size="lg" aria-label="Tạo bài viết">
        <Plus size={26} />
      </Button>
    </section>
  );
};

export default CommunityComposer;
