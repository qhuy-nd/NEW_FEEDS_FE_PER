export interface ITweetCommentGetRequest {
  slug: string;
}

export type ITweetCommentGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    parent_id?: {
      _id?: string;
      parent_id?: string[];
      content?: string;
      attachments?: string;
      tweet?: string[];
      social_group?: string[];
      like_count?: number;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    content?: string;
    attachments?: Record<string, unknown>[];
    tweet?: string[];
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    like_count?: number;
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
