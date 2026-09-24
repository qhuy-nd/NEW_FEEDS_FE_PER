export interface IGroupRoleCreateOneRequest {
  title: string;
  social_group: string[];
  position?: number;
  color?: string;
  is_system?: boolean;
  permissions?: Record<string, unknown>;
}

export type IGroupRoleCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
