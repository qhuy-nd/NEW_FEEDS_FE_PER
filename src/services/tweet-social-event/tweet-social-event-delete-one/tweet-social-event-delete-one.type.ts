export interface ITweetSocialEventDeleteOneRequest {
  id: string;
}

export type ITweetSocialEventDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
