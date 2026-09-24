export interface ITweetCommentUpdateOneRequest {
  id: string;
  parent_id?: string[];
  content?: string;
  attachments?: string;
  tweet?: string[];
  social_group?: string[];
}

export type ITweetCommentUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
