export interface IUserCollectionsCreateOneRequest {
  title: string;
  short_description?: string;
  featured_image?: string;
  position?: number;
}

export type IUserCollectionsCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
