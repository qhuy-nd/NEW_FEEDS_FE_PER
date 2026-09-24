export interface IDiscussionCommentDeleteOneRequest {
  id: string;
}

export type IDiscussionCommentDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
