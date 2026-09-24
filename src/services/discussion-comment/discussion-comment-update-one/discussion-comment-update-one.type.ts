export interface IDiscussionCommentUpdateOneRequest {
  id: string;
  content?: string;
  attachments?: string;
  discussion?: string[];
  parent_id?: string[];
}

export type IDiscussionCommentUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
