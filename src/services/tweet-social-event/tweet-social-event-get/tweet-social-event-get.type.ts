export interface ITweetSocialEventGetRequest {
  slug: string;
}

export type ITweetSocialEventGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    slug?: string;
    short_description?: string;
    featured_image?: Record<string, unknown>[];
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    categories?: {
      _id?: string;
      title?: string;
      short_description?: string;
      slug?: string;
      social_group?: string[];
      parent_id?: string[];
      position?: number;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    tag?: {
      _id?: string;
      name?: string;
      slug?: string;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    approved_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
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
    created_at?: string;
    updated_at?: string;
    tenant_id?: string;
    locale?: string;
    locale_id?: string;
    created_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    updated_by?: string;
  };
  meta?: unknown;
};
