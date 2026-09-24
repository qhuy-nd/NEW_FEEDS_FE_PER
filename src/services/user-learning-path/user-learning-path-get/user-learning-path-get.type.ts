export interface IUserLearningPathGetRequest {
  slug: string;
}

export type IUserLearningPathGetResponse = {
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
    learning_path?: {
      _id?: string;
      title?: string;
      slug?: string;
      department?: string;
      team?: string;
      job_position?: string;
      course?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    status?: "Chưa học" | "Đang học" | "Hoàn thành";
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
