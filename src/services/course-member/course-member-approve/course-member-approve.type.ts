export interface ICourseMemberApproveRequest {
  id: string;
  course: string;
  user?: string;
}

export type ICourseMemberApproveResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
