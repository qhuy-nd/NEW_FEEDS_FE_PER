export interface ILikeRequest {
  discussion: string;
  type?: string;
}

export type ILikeResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
