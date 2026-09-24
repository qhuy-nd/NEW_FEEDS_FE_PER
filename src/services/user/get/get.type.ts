export interface IGetRequest {
  slug: string;
}

export type IGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    full_name?: string;
    username?: string;
    nickname?: string;
    featured_image?: Record<string, unknown>[];
    cover?: Record<string, unknown>[];
  };
  meta?: unknown;
};
