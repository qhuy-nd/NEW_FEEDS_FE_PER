import type { CommunityGroupItem } from "../../molecules/community-sidebar";
import type { CommunityPost } from "../../molecules/community-post-card";
import type { CommunityCourseItem } from "../../molecules/community-right-rail";

type AnyRecord = Record<string, unknown>;

export const mapTweetsToCommunityPosts = (tweets?: unknown | null): CommunityPost[] => {
  if (!Array.isArray(tweets)) return [];

  return tweets.map((tweetValue, index) => {
    const record = isRecord(tweetValue) ? tweetValue : {};
    const author = firstRecord(record.created_by);
    const group = firstRecord(record.social_group);
    const imageUrl = firstImageUrl([
      record.featured_image,
      firstRecord(record.mangox_mge_tweet_social_news_tweet)?.featured_image,
      firstRecord(record.mangox_mge_tweet_social_image_tweet)?.featured_image,
      firstRecord(record.mangox_mge_tweet_social_videos_tweet)?.featured_image,
    ]);
    const tweetLikes = firstArray(record.mangox_mge_tweet_like_tweet);

    return {
      id: getString(record, ["_id", "id"]) ?? `tweet-${index}`,
      groupName: getString(group, ["title", "name", "slug"]) ?? getString(record, ["group_name"]) ?? "Việt Nam vô địch",
      authorName: getString(author, ["full_name", "username", "nickname"]) ?? "Thành viên MGE",
      authorAvatarUrl: firstImageUrl([author?.featured_image]),
      title: getString(record, ["title", "name", "content", "description"]) ?? "Bài viết cộng đồng",
      content: getString(record, ["short_description", "description", "content"]),
      imageUrl,
      createdLabel: formatTimeAgo(getString(record, ["created_at", "createdAt"])),
      likeCount: getNumber(record, ["like_count", "likes", "total_like"]) ?? tweetLikes.length,
      commentCount: getNumber(record, ["comment_count", "comments", "reply_count"]) ?? 0,
    };
  });
};

export const mapPinnedGroupsToCommunityGroups = (groups?: unknown | null): CommunityGroupItem[] => {
  if (!Array.isArray(groups)) return [];

  return groups.map((itemValue, index) => {
    const item = isRecord(itemValue) ? itemValue : {};
    const group = firstRecord(item.social_group);
    const fallbackName = getString(firstRecord(item.user), ["full_name", "username", "nickname"]);

    return {
      id: getString(item, ["_id", "id"]) ?? `pin-${index}`,
      name: getString(group, ["title", "name", "slug"]) ?? fallbackName ?? "Nhóm đã ghim",
      membersLabel: getMembersLabel(group),
      avatarUrl: firstImageUrl([group?.cover]),
    };
  });
};

export const mapJoinedGroupsToCommunityGroups = (groups?: unknown | null): CommunityGroupItem[] => {
  if (!Array.isArray(groups)) return [];

  return groups.map((groupValue, index) => {
    const record = isRecord(groupValue) ? groupValue : {};

    return {
      id: getString(record, ["_id", "id"]) ?? `joined-${index}`,
      name: getString(record, ["title", "name", "slug"]) ?? "Nhóm cộng đồng",
      membersLabel: getMembersLabel(record),
      avatarUrl: firstImageUrl([record.cover]),
    };
  });
};

export const mapCoursesToCommunityCourses = (courses?: unknown | null): CommunityCourseItem[] => {
  if (!Array.isArray(courses)) return [];

  return courses.map((courseValue, index) => {
    const record = isRecord(courseValue) ? courseValue : {};

    return {
      id: getString(record, ["_id", "id"]) ?? `course-${index}`,
      title: getString(record, ["title", "name", "slug"]) ?? "Khóa học nội bộ",
    };
  });
};

export const mapNotificationsToWelcomeTitle = (notifications?: unknown | null): string | undefined => {
  const first = Array.isArray(notifications) ? notifications[0] : undefined;
  return getString(first, ["title"]);
};

const firstRecord = (value: unknown): AnyRecord | undefined => {
  if (Array.isArray(value)) return isRecord(value[0]) ? value[0] : undefined;
  return isRecord(value) ? value : undefined;
};

const firstArray = (value: unknown): unknown[] => {
  return Array.isArray(value) ? value : [];
};

const firstImageUrl = (sources: unknown[]): string | undefined => {
  for (const source of sources) {
    const record = firstRecord(source);
    const url = record ? getString(record, ["url", "src", "path", "thumbnail", "secure_url"]) : undefined;
    if (url) return url;
  }

  return undefined;
};

const getMembersLabel = (record?: AnyRecord): string => {
  const count = getNumber(record, ["member_count", "members_count", "total_member"]) ?? 2;
  return `${count} thành viên`;
};

const getString = (record: unknown, keys: string[]): string | undefined => {
  if (!isRecord(record)) return undefined;

  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string" && value.trim()) return value;
  }

  return undefined;
};

const getNumber = (record: unknown, keys: string[]): number | undefined => {
  if (!isRecord(record)) return undefined;

  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number") return value;
  }

  return undefined;
};

const isRecord = (value: unknown): value is AnyRecord => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

const formatTimeAgo = (dateValue?: string): string | undefined => {
  if (!dateValue) return undefined;

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return undefined;

  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000));
  if (diffMinutes < 60) return `${diffMinutes} phút trước`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} giờ trước`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} ngày trước`;
};
