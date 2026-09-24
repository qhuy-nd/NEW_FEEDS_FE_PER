export interface ICreateOneRequest {
  title: string;
  position?: number;
  course: string[];
}

export type ICreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
