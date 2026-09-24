export interface ICourseRoleUpdateOneRequest {
  id: string;
  title?: string;
  course?: string[];
  position?: number;
  color?: string;
  is_system?: boolean;
  permissions?: Record<string, unknown>;
}

export type ICourseRoleUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
