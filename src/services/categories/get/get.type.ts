export interface IGetRequest {
  slug: string;
}

export type IGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    slug?: string;
    parent_id?: {
      _id?: string;
      title?: string;
      slug?: string;
      parent_id?: string[];
      position?: number;
      short_description?: string;
      featured_image?: string;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    position?: number;
    short_description?: string;
    featured_image?: Record<string, unknown>[];
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
