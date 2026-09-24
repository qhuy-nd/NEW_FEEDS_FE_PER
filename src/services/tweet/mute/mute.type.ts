export interface IMuteRequest {
  tweet: string;
}

export type IMuteResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
