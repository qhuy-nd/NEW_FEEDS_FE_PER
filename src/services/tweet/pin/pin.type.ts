export interface IPinRequest {
  tweet: string;
  position?: string;
}

export type IPinResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
