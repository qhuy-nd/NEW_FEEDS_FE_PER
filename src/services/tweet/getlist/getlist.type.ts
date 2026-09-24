export interface IGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IGetlistResponse = {
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
    mangox_mge_tweet_social_news_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
    }[];
    mangox_mge_tweet_social_image_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
    }[];
    mangox_mge_tweet_social_videos_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
    }[];
    mangox_mge_tweet_social_votes_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
      mangox_mge_user_vote_result_tweet_id?: {
        _id?: string;
        answer?: string;
        "created_by=eq.@options:user_id"?: string;
      }[];
    }[];
    mangox_mge_tweet_social_file_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
    }[];
    mangox_mge_tweet_social_event_tweet?: {
      featured_image?: Record<string, unknown>[];
      categories?: Record<string, unknown>[];
      tag?: Record<string, unknown>[];
    }[];
    mangox_mge_tweet_like_tweet?: {
      _id?: string;
      type?: string;
      "created_by=eq.@options:user_id"?: string;
    }[];
    mangox_mge_tweet_saved_tweet_id?: {
      _id?: string;
      user_collection?: string;
      "created_by=eq.@options:user_id"?: string;
    }[];
    social_group?: {
      cover?: Record<string, unknown>[];
      mangox_mge_group_member_social_group?: {
        _id?: string;
        status?: string;
        role?: string;
        user?: string;
        "user=eq.@options:user_id"?: string;
      }[];
    }[];
    categories?: Record<string, unknown>[];
    tag?: Record<string, unknown>[];
    featured_image?: Record<string, unknown>[];
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
