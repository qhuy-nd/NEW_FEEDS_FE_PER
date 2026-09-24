export interface ITweetSocialNewsUpdateOneRequest {
  id: string;
  title?: string;
  short_description?: string;
  long_description?: string;
  featured_image?: string;
  categories?: string[];
  tag?: string[];
  comment_off?: boolean;
  like_off?: boolean;
  status?: "Đang hiển thị" | "Đã xoá" | "Đã duyệt" | "Đang ẩn" | "Nháp" | "Lưu trữ" | "Chờ tới giờ đăng" | "Bị từ chối" | "Chờ duyệt";
  social_group?: string[];
  approve_at?: string;
  approve_by?: string[];
  published_at?: string;
  report_tweet_off?: boolean;
  report_comment_off?: boolean;
  tweet_waiting_time?: string;
  reject_reason?: string;
  tweet?: string[];
}

export type ITweetSocialNewsUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
