export interface ITweetSocialVotesVoteRequest {
  tweet_id: string;
  answer: string;
}

export type ITweetSocialVotesVoteResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
