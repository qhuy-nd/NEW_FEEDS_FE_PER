export interface ITweetSocialVotesGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type ITweetSocialVotesGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    slug?: string;
    short_description?: string;
    long_description?: string;
    vote_type?: "Bình chọn" | "Trắc nghiệm";
    content?: string;
    answers?: string[];
    reason?: string;
    featured_image?: Record<string, unknown>[];
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
    comment_off?: boolean;
    like_off?: boolean;
    status?: "Đang hiển thị" | "Đã xoá" | "Đã duyệt" | "Đang ẩn" | "Nháp" | "Lưu trữ" | "Chờ tới giờ đăng" | "Bị từ chối" | "Chờ duyệt";
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    approve_at?: string;
    approve_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    published_at?: string;
    report_comment_off?: boolean;
    report_tweet_off?: boolean;
    question_type?: "Truyền thống" | "Hình ảnh";
    layout?: string;
    allow_multiple_answer?: boolean;
    time_limit?: string;
    tweet_waiting_time?: string;
    reject_reason?: string;
    total_user_voted?: number;
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
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
