export interface IGroupCategoryCreateOneRequest {
  title: string;
  short_description?: string;
  social_group: string[];
  parent_id?: string[];
  position?: number;
}

export type IGroupCategoryCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
