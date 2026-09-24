export interface ITweetSocialVideosDeleteOneRequest {
  id: string;
}

export type ITweetSocialVideosDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
