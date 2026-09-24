export interface ISubmitRequest {
  exam: string;
  user_answer?: string;
  total_score?: string;
  status?: string;
}

export type ISubmitResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
