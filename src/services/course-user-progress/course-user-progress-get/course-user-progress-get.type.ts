export interface ICourseUserProgressGetRequest {
  slug: string;
}

export type ICourseUserProgressGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    lesson?: Record<string, unknown>[];
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
    course?: Record<string, unknown>[];
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
  };
  meta?: unknown;
};
