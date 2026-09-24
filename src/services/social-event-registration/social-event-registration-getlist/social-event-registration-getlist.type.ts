export interface ISocialEventRegistrationGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type ISocialEventRegistrationGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    tweet?: {
      _id?: string;
      title?: string;
      slug?: string;
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
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
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
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
