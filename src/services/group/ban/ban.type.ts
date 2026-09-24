export interface IBanRequest {
  social_group: string;
  user: string;
  banned_until: string;
  reason?: string;
  source?: string;
}

export type IBanResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
