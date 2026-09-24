export interface IUserExamResultGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IUserExamResultGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    exam?: {
      _id?: string;
      title?: string;
      description?: string;
      slug?: string;
      chapters?: string[];
      course?: string[];
      exam_type?: "Trắc nghiệm" | "Tự luận";
      essay_content?: string;
      essay_files?: string;
      testing_time?: number;
      test_opening_time?: string;
      testing_closing_time?: string;
      member_retries_allowed?: number;
      minimum_passing_score?: number;
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
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    total_score?: number;
    user_answer?: string[];
    status?: "doing" | "finished";
    correct_answer_count?: string;
    attempt_count?: number;
    exam_pass_status?: string;
    max_possible_score?: number;
    score_scale_10?: number;
    created_at?: string;
    updated_at?: string;
    tenant_id?: string;
    locale?: string;
    locale_id?: string;
    created_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    updated_by?: string;
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
