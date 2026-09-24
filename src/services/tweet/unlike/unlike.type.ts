export interface IUnlikeRequest {
  tweet: string;
}

export type IUnlikeResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
