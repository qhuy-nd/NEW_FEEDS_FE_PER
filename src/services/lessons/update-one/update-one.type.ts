export interface IUpdateOneRequest {
  id: string;
}

export type IUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
