export interface IUnpinGroupRequest {
  social_group: string;
}

export type IUnpinGroupResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
