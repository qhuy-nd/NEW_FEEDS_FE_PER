export interface IUpdateOneRequest {
  id: string;
  title?: string;
  position?: number;
  course?: string[];
}

export type IUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
