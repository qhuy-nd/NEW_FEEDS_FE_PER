export interface IGroupBanGetRequest {
  slug: string;
}

export type IGroupBanGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    banned_until?: string;
    reason?: string;
    source?: "Bài viết" | "Bình luận";
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
