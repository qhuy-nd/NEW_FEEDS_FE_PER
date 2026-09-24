export interface IUserReportsCreateOneRequest {
  type: "Bài viết" | "Bình luận" | "Nhóm";
  reason: "Spam" | "Bắt nạt, ngôn tử thù địch" | "Thông tin sai lệch" | "Vi phạm bản quyền" | "Nội dung quấy rối, khiêu dâm hoặc tình dục" | "Hành vi lừa đảo" | "Bạo lực hoặc tự hại";
  document_id: string;
  social_group?: string[];
  scope?: "Quản trị viên nhóm" | "Quản trị viên hệ thống";
  note?: string;
}

export type IUserReportsCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
