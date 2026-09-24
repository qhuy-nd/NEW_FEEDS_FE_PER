export interface IUserCollectionsDeleteOneRequest {
  id: string;
}

export type IUserCollectionsDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
