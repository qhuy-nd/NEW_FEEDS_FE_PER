export interface IJoinRequest {
  course: string;
}

export type IJoinResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
