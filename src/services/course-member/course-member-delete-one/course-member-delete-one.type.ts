export interface ICourseMemberDeleteOneRequest {
  id: string;
}

export type ICourseMemberDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
