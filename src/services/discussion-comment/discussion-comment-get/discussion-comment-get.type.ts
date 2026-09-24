export interface IDiscussionCommentGetRequest {
  slug: string;
}

export type IDiscussionCommentGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    content?: string;
    attachments?: Record<string, unknown>[];
    discussion?: {
      _id?: string;
      title?: string;
      content?: string;
      attachments?: string;
      course?: string[];
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    parent_id?: {
      _id?: string;
      content?: string;
      attachments?: string;
      discussion?: string[];
      parent_id?: string[];
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    created_at?: string;
    updated_at?: string;
    tenant_id?: string;
    locale?: string;
    locale_id?: string;
    created_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    updated_by?: string;
  };
  meta?: unknown;
};
