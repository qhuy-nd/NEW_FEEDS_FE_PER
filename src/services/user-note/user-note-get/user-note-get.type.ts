export interface IUserNoteGetRequest {
  slug: string;
}

export type IUserNoteGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    content?: string;
    timestamp?: string;
    lesson?: string;
    title?: string;
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
