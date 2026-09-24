export interface IGroupRoleUpdateOneRequest {
  id: string;
  title?: string;
  social_group?: string[];
  position?: number;
  color?: string;
  is_system?: boolean;
  permissions?: Record<string, unknown>;
}

export type IGroupRoleUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
