export interface ICourseContentItemDeleteOneRequest {
  id: string;
}

export type ICourseContentItemDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
