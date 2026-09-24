export interface IDiscussionCommentLikeRequest {
  comment: string;
}

export type IDiscussionCommentLikeResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
