export interface IUserCollectionsGetRequest {
  slug: string;
}

export type IUserCollectionsGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    short_description?: string;
    featured_image?: Record<string, unknown>[];
    position?: number;
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
