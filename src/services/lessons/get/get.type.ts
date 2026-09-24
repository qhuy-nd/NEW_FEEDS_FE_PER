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
    video_file?: Record<string, unknown>[];
    video_thumbnail?: Record<string, unknown>[];
    files?: Record<string, unknown>[];
    resources?: Record<string, unknown>[];
    chapters?: Record<string, unknown>[];
    course?: Record<string, unknown>[];
  };
  meta?: unknown;
};
