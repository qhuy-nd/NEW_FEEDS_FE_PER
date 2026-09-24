export interface IGroupRoleDeleteOneRequest {
  id: string;
}

export type IGroupRoleDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
