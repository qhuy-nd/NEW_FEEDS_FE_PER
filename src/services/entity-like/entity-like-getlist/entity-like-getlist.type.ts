export interface IEntityLikeGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IEntityLikeGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    entity_id?: string;
    entity_name?: "mge-tweet-social-image" | "mge-tweet-social-news" | "mge-tweet-social-videos" | "mge-tweet-social-votes" | "mge-tweet-social-file" | "mge-tweet-social-event" | "mge-tweet-comment" | "mge-discussions" | "mge-user-rating";
    type?: "like" | "dislike";
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    is_active?: boolean;
    is_waiting_like?: boolean;
    is_waiting_unlike?: boolean;
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
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
