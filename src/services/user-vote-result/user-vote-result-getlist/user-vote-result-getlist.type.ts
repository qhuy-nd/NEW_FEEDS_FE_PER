export interface IUserVoteResultGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IUserVoteResultGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    tweet_id?: {
      _id?: string;
      title?: string;
      slug?: string;
      short_description?: string;
      long_description?: string;
      vote_type?: "Bình chọn" | "Trắc nghiệm";
      content?: string;
      answers?: string[];
      reason?: string;
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
      created_by?: string;
      updated_by?: string;
    }[];
    answer?: string[];
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
