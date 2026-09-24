export interface IUserLearningPathCreateOneRequest {
  user: string[];
  learning_path: string[];
  status: "Chưa học" | "Đang học" | "Hoàn thành";
}

export type IUserLearningPathCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
