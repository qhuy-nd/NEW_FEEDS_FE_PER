export interface ITweetSavedGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type ITweetSavedGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    user_collection?: {
      _id?: string;
      title?: string;
      short_description?: string;
      featured_image?: string;
      position?: number;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    tweet_id?: string[];
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
