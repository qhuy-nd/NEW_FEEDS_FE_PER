export interface IUpdateOneRequest {
  id: string;
  title?: string;
  content?: string;
  attachments?: string;
  course?: string[];
}

export type IUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
