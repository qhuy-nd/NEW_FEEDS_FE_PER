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
    full_name?: string;
    username?: string;
    nickname?: string;
    featured_image?: Record<string, unknown>[];
    cover?: Record<string, unknown>[];
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
