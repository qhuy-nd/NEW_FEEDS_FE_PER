export interface IUserLearningPathUpdateOneRequest {
  id: string;
  user?: string[];
  learning_path?: string[];
  status?: "Chưa học" | "Đang học" | "Hoàn thành";
}

export type IUserLearningPathUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
