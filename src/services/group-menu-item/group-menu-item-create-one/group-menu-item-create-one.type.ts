export interface IGroupMenuItemCreateOneRequest {
  name: string;
  type: "Category" | "Link";
  link?: string;
  position?: number;
  social_group: string[];
  category?: string[];
  parent_id?: string[];
}

export type IGroupMenuItemCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
