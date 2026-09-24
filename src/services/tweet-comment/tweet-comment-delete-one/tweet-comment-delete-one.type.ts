export interface ITweetCommentDeleteOneRequest {
  id: string;
}

export type ITweetCommentDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
