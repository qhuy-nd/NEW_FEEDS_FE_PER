export interface ICourseMemberGetRequest {
  slug: string;
}

export type ICourseMemberGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    course?: Record<string, unknown>[];
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    status?: "Đã tham gia" | "Chờ duyệt";
    role?: "Giảng viên" | "Trợ giảng" | "Học viên";
    is_finished?: boolean;
    pass_status?: "Hoàn thành sớm" | "Hoàn thành đúng hạn" | "Hoàn thành trễ" | "Chưa hoàn thành";
    start_learning_time?: string;
    end_learning_time?: string;
    course_role?: string[];
    permissions?: Record<string, unknown>;
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
