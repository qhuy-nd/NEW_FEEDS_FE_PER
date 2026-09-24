export interface ITweetPinGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type ITweetPinGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    tweet?: string;
    position?: number;
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
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
