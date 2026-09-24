export interface IGetRequest {
  slug: string;
}

export type IGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
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
    mangox_mge_group_member_social_group?: {
      _id?: string;
      status?: string;
      role?: string;
      user?: string;
    }[];
    cover?: Record<string, unknown>[];
  };
  meta?: unknown;
};
