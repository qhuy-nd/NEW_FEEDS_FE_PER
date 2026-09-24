import { Bookmark, Heart, MessageCircle, MoreVertical, ThumbsUp } from "lucide-react";
import Avatar from "../../atoms/avatar";
import BaseCard from "../../atoms/base-card";
import Button from "../../atoms/button";
import Typography from "../../atoms/typography";

export type CommunityPost = {
  id: string;
  groupName: string;
  authorName: string;
  authorAvatarUrl?: string;
  title: string;
  content?: string;
  imageUrl?: string;
  createdLabel?: string;
  likeCount: number;
  commentCount: number;
};

export type CommunityPostCardProps = {
  post: CommunityPost;
  featured?: boolean;
};

const CommunityPostCard = ({ post, featured = false }: CommunityPostCardProps) => {
  return (
    <article className="community-post-card">
      <BaseCard
        header={
          featured ? (
            <Typography as="small" weight="bold" className="community-post-card__eyebrow">
              NỔI BẬT
            </Typography>
          ) : (
            <div className="community-post-card__header">
              <Avatar
                src={post.authorAvatarUrl}
                alt={post.authorName}
                fallback={post.authorName}
                size="lg"
                shape="circle"
              />
              <div className="community-post-card__author">
                <Typography as="span" weight="bold" className="community-post-card__author-name">
                  {post.groupName}
                </Typography>
                <Typography as="small" className="community-post-card__meta">
                  {post.authorName}{post.createdLabel ? ` · ${post.createdLabel}` : ""}
                </Typography>
              </div>
              <Button type="button" iconOnly variant="default" aria-label="Thêm tùy chọn">
                <MoreVertical size={20} />
              </Button>
            </div>
          )
        }
        media={post.imageUrl && (
          <img className="community-post-card__image" src={post.imageUrl} alt={post.title} />
        )}
        body={
          <div className="community-post-card__body">
            {featured && (
              <Typography as="small" className="community-post-card__meta community-post-card__dot-meta">
                {post.groupName}
              </Typography>
            )}
            <Typography as="h3" weight="bold" className="community-post-card__title">
              {post.title}
            </Typography>
            {post.content && !featured && (
              <Typography as="p" className="community-post-card__content">
                {post.content}
              </Typography>
            )}
          </div>
        }
        counters={
          <div className="community-post-card__counters">
            <span><ThumbsUp size={20} /> {post.likeCount}</span>
            <span><MessageCircle size={20} /> {post.commentCount}</span>
            {!featured && <span>{post.commentCount} bình luận</span>}
          </div>
        }
        actions={!featured && (
          <div className="community-post-card__actions">
            <Button type="button" variant="default"><Heart size={18} /> Thích</Button>
            <Button type="button" variant="default"><MessageCircle size={18} /> Bình luận</Button>
            <Button type="button" variant="default"><Bookmark size={18} /> Lưu</Button>
          </div>
        )}
      />
    </article>
  );
};

export default CommunityPostCard;
