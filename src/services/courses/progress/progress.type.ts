export interface IProgressRequest {
  course: string;
  lesson?: string;
  exam?: string;
}

export type IProgressResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
