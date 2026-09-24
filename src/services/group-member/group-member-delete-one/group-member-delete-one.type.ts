export interface IGroupMemberDeleteOneRequest {
  id: string;
}

export type IGroupMemberDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
