export interface IFollowRequest {
  to: string;
}

export type IFollowResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
