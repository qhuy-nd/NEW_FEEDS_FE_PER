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
    slug?: string;
    position?: number;
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
    mangox_mge_lessons_chapters?: {
      _id?: string;
      title?: string;
      slug?: string;
      position?: string;
      type?: string;
      lesson_type?: string;
      status?: string;
      time_learning?: string;
      video_url?: string;
      video_file?: Record<string, unknown>[];
    }[];
    mangox_mge_exams_chapters?: {
      _id?: string;
      title?: string;
      slug?: string;
      position?: string;
      status?: string;
      type?: string;
      exam_type?: string;
      is_final_exam?: string;
      testing_time?: string;
      minimum_passing_score?: string;
    }[];
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
