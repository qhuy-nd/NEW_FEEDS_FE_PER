export interface ITweetSocialEventRegisterRequest {
  tweet: string;
  social_group: string;
}

export type ITweetSocialEventRegisterResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
