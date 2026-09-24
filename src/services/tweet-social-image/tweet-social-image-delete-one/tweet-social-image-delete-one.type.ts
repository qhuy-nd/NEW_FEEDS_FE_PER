export interface ITweetSocialImageDeleteOneRequest {
  id: string;
}

export type ITweetSocialImageDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
