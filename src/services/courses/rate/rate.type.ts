export interface IRateRequest {
  course: string;
  rating_score: string;
  content?: string;
  images?: string;
}

export type IRateResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
