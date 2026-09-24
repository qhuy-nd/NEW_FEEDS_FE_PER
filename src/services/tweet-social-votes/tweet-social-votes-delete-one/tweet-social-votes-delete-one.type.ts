export interface ITweetSocialVotesDeleteOneRequest {
  id: string;
}

export type ITweetSocialVotesDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
