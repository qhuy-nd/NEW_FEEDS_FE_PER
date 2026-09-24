export interface ICourseMemberCreateOneRequest {
  course: string[];
  user?: string[];
  status?: "Đã tham gia" | "Chờ duyệt";
  role?: "Giảng viên" | "Trợ giảng" | "Học viên";
  is_finished?: boolean;
  pass_status?: "Hoàn thành sớm" | "Hoàn thành đúng hạn" | "Hoàn thành trễ" | "Chưa hoàn thành";
  start_learning_time?: string;
  end_learning_time?: string;
  course_role?: string[];
  permissions?: Record<string, unknown>;
}

export type ICourseMemberCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
