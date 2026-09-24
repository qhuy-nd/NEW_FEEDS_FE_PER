export interface IUnpinRequest {
  tweet: string;
}

export type IUnpinResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
