export interface IGroupMemberCreateOneRequest {
  social_group: string[];
  user: string[];
  status: "Đã tham gia" | "Chờ duyệt" | "Đã rời nhóm" | "Bị xoá" | "Bị từ chối";
  isFollow?: boolean;
  role: "Phó nhóm" | "Thành viên" | "Chủ nhóm";
  group_role?: string[];
  permissions?: Record<string, unknown>;
}

export type IGroupMemberCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
