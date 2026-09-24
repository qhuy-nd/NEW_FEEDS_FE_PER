export interface IUnsaveRequest {
  tweet_id: string;
}

export type IUnsaveResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
