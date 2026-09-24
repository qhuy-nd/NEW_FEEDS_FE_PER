export interface ITweetLikeGetRequest {
  slug: string;
}

export type ITweetLikeGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    tweet?: string[];
    type?: "like" | "dislike";
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
