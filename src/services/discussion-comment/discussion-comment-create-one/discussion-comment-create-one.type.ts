export interface IDiscussionCommentCreateOneRequest {
  content?: string;
  attachments?: string;
  discussion: string[];
  parent_id?: string[];
}

export type IDiscussionCommentCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
