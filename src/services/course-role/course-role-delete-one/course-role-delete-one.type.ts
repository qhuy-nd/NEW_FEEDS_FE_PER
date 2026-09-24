export interface ICourseRoleDeleteOneRequest {
  id: string;
}

export type ICourseRoleDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
