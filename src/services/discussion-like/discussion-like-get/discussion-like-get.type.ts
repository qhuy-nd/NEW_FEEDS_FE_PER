export interface IDiscussionLikeGetRequest {
  slug: string;
}

export type IDiscussionLikeGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
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
    type?: "like";
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
