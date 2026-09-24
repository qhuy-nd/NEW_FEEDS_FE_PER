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
    question_type?: "Một đáp án" | "Nhiều đáp án" | "Đúng / Sai" | "Điền vào chỗ trống";
    answer?: string[];
    level?: "Dễ" | "Trung bình" | "Khó";
    category?: {
      _id?: string;
      title?: string;
      slug?: string;
      parent_id?: string[];
      position?: number;
      short_description?: string;
      featured_image?: string;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    score?: number;
    answer_to_show?: string;
    blank_answer?: string[];
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
