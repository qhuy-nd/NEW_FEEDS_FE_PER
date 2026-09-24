export interface IUserReportsGetRequest {
  slug: string;
}

export type IUserReportsGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    type?: "Bài viết" | "Bình luận" | "Nhóm";
    reason?: "Spam" | "Bắt nạt, ngôn tử thù địch" | "Thông tin sai lệch" | "Vi phạm bản quyền" | "Nội dung quấy rối, khiêu dâm hoặc tình dục" | "Hành vi lừa đảo" | "Bạo lực hoặc tự hại";
    document_id?: string;
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    scope?: "Quản trị viên nhóm" | "Quản trị viên hệ thống";
    note?: string;
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
