export interface ISaveRequest {
  tweet_id: string;
}

export type ISaveResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
