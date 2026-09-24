export interface IGroupRoleGetRequest {
  slug: string;
}

export type IGroupRoleGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    slug?: string;
    social_group?: Record<string, unknown>[];
    position?: number;
    color?: string;
    is_system?: boolean;
    permissions?: Record<string, unknown>;
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
