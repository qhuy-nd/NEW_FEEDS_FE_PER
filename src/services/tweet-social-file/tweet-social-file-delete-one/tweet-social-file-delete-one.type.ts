export interface ITweetSocialFileDeleteOneRequest {
  id: string;
}

export type ITweetSocialFileDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
