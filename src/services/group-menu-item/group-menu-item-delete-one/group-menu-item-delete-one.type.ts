export interface IGroupMenuItemDeleteOneRequest {
  id: string;
}

export type IGroupMenuItemDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
