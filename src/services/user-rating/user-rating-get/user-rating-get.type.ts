export interface IUserRatingGetRequest {
  slug: string;
}

export type IUserRatingGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    rating_score?: "1 sao" | "2 sao" | "3 sao" | "4 sao" | "5 sao";
    content?: string;
    images?: Record<string, unknown>[];
    course?: Record<string, unknown>[];
    instructor_response?: string;
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
