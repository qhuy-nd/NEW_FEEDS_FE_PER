export interface ICreateOneRequest {
  title: string;
  content: string;
  attachments?: string;
  course: string[];
}

export type ICreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
