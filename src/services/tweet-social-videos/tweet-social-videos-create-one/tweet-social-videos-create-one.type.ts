export interface ITweetSocialVideosCreateOneRequest {
  title: string;
  short_description?: string;
  video_link?: string;
  video_file?: string;
  featured_image?: string;
  categories?: string[];
  tag?: string[];
  comment_off?: boolean;
  like_off?: boolean;
  status?: "Đang hiển thị" | "Đã xoá" | "Đã duyệt" | "Đang ẩn" | "Nháp" | "Lưu trữ" | "Chờ tới giờ đăng" | "Bị từ chối" | "Chờ duyệt";
  social_group: string[];
  approve_at?: string;
  approve_by?: string[];
  published_at?: string;
  report_tweet_off?: boolean;
  report_comment_off?: boolean;
  youtube_path?: string;
  tweet_waiting_time?: string;
  reason_reject?: string;
  tweet?: string[];
}

export type ITweetSocialVideosCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
