export interface IGroupMemberUpdateOneRequest {
  id: string;
  social_group?: string[];
  user?: string[];
  status?: "Đã tham gia" | "Chờ duyệt" | "Đã rời nhóm" | "Bị xoá" | "Bị từ chối";
  isFollow?: boolean;
  role?: "Phó nhóm" | "Thành viên" | "Chủ nhóm";
  group_role?: string[];
  permissions?: Record<string, unknown>;
}

export type IGroupMemberUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
