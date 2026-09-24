export interface IGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    description?: string;
    slug?: string;
    chapters?: {
      _id?: string;
      title?: string;
      slug?: string;
      position?: number;
      course?: string[];
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    course?: Record<string, unknown>[];
    exam_type?: "Trắc nghiệm" | "Tự luận";
    essay_content?: string;
    essay_files?: Record<string, unknown>[];
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
    created_by?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    updated_by?: string;
    mangox_mge_user_exam_result_exam?: {
      _id?: string;
      status?: string;
      attempt_count?: string;
      total_score?: string;
      max_possible_score?: string;
      score_scale_10?: string;
      correct_answer_count?: string;
      exam_pass_status?: string;
      user_answer?: string;
      created_at?: string;
      "created_by=eq.@options:user_id"?: string;
    }[];
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
