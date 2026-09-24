export interface IAddCartRequest {
  course: string;
}

export type IAddCartResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
