export interface IUserCollectionsUpdateOneRequest {
  id: string;
  title?: string;
  short_description?: string;
  featured_image?: string;
  position?: number;
}

export type IUserCollectionsUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
