export interface IHideRequest {
  tweet: string;
}

export type IHideResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
