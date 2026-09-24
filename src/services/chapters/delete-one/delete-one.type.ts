export interface IDeleteOneRequest {
  id: string;
}

export type IDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
