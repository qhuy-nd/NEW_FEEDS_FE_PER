export interface ITweetCommentCreateOneRequest {
  parent_id?: string[];
  content?: string;
  attachments?: string;
  tweet: string[];
  social_group: string[];
}

export type ITweetCommentCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
