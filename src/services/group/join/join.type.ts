export interface IJoinRequest {
  social_group: string;
}

export type IJoinResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
