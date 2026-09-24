export interface IUserReportsDeleteOneRequest {
  id: string;
}

export type IUserReportsDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
