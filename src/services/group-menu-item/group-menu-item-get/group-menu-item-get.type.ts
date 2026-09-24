export interface IGroupMenuItemGetRequest {
  slug: string;
}

export type IGroupMenuItemGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    name?: string;
    type?: "Category" | "Link";
    link?: string;
    position?: number;
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    category?: {
      _id?: string;
      title?: string;
      short_description?: string;
      slug?: string;
      social_group?: string[];
      parent_id?: string[];
      position?: number;
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
      name?: string;
      type?: "Category" | "Link";
      link?: string;
      position?: number;
      social_group?: string[];
      category?: string[];
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
