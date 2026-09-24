export interface ITweetSocialNewsDeleteOneRequest {
  id: string;
}

export type ITweetSocialNewsDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
