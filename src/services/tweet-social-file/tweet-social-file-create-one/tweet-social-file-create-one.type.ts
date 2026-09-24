export interface ITweetSocialFileCreateOneRequest {
  title: string;
  short_description?: string;
  featured_image?: string;
  attachments: string[];
  social_group: string[];
  categories?: string[];
  tag?: string[];
  approve_by?: string[];
  approved_at?: string;
  comment_off?: boolean;
  like_off?: boolean;
  status?: "Đang hiển thị" | "Đã xoá" | "Đã duyệt" | "Đang ẩn" | "Nháp" | "Lưu trữ" | "Chờ tới giờ đăng" | "Bị từ chối" | "Chờ duyệt";
  report_tweet_off?: boolean;
  report_comment_off?: boolean;
  tweet_waiting_time?: string;
  server_time_g7?: string;
  type?: string;
  tweet?: string[];
}

export type ITweetSocialFileCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
