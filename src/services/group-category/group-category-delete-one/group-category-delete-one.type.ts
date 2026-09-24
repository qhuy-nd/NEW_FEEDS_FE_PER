export interface IGroupCategoryDeleteOneRequest {
  id: string;
}

export type IGroupCategoryDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
