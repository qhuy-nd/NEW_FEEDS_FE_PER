export interface IGroupMemberGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IGroupMemberGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    status?: "Đã tham gia" | "Chờ duyệt" | "Đã rời nhóm" | "Bị xoá" | "Bị từ chối";
    isFollow?: boolean;
    role?: "Phó nhóm" | "Thành viên" | "Chủ nhóm";
    group_role?: string[];
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
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
