export interface ICreateOneRequest {
  title: string;
  description?: string;
  chapters?: string[];
  course: string[];
  exam_type?: "Trắc nghiệm" | "Tự luận";
  essay_content?: string;
  essay_files?: string;
  testing_time?: number;
  test_opening_time?: string;
  testing_closing_time?: string;
  member_retries_allowed?: number;
  minimum_passing_score: number;
  show_answer?: boolean;
  shuffle_question?: boolean;
  shuffle_answer?: boolean;
  return_previous_question?: boolean;
  score_scale?: "10" | "100" | "100%";
  time_limit_mode?: boolean;
  questions?: string[];
  is_final_exam?: boolean;
  position?: number;
  type?: "Exam";
}

export type ICreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
