export interface IUserLearningPathDeleteOneRequest {
  id: string;
}

export type IUserLearningPathDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
