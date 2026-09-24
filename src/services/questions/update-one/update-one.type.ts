export interface IUpdateOneRequest {
  id: string;
  title?: string;
  question_type?: "Một đáp án" | "Nhiều đáp án" | "Đúng / Sai" | "Điền vào chỗ trống";
  answer?: string[];
  level?: "Dễ" | "Trung bình" | "Khó";
  category?: string[];
  score?: number;
  answer_to_show?: string;
  blank_answer?: string[];
}

export type IUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
