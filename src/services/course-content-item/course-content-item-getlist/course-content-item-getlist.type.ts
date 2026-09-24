export interface ICourseContentItemGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type ICourseContentItemGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    position?: number;
    course?: Record<string, unknown>[];
    slug?: string;
    title?: string;
    type?: "Lesson" | "Exam";
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
    lesson_type?: "Text" | "File" | "Video";
    status?: "Active";
    time_learning?: number;
    lesson_content?: string;
    video_file?: Record<string, unknown>[];
    video_url?: string;
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
