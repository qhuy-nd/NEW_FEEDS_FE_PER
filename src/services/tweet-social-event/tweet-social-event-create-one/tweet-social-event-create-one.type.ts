export interface ITweetSocialEventCreateOneRequest {
  title: string;
  short_description?: string;
  featured_image?: string;
  social_group?: string[];
  categories?: string[];
  tag?: string[];
  approved_by?: string[];
  approved_at?: string;
  comment_off?: boolean;
  like_off?: boolean;
  status?: "Đang hiển thị" | "Đã xoá" | "Đã duyệt" | "Đang ẩn" | "Nháp" | "Lưu trữ" | "Chờ tới giờ đăng" | "Bị từ chối" | "Chờ duyệt";
  tweet_waiting_time?: string;
  event_start_time?: string;
  event_end_time?: string;
  event_type?: "Online" | "Offline";
  event_location?: string;
  tweet?: string[];
}

export type ITweetSocialEventCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
