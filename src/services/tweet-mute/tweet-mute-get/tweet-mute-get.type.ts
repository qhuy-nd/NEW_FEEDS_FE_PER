export interface ITweetMuteGetRequest {
  slug: string;
}

export type ITweetMuteGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    tweet?: string;
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    social_group?: {
      cover?: Record<string, unknown>[];
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
