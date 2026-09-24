export interface IPinRequest {
  social_group: string;
  position?: string;
}

export type IPinResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
