export interface ICourseRoleCreateOneRequest {
  title: string;
  course: string[];
  position?: number;
  color?: string;
  is_system?: boolean;
  permissions?: Record<string, unknown>;
}

export type ICourseRoleCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
