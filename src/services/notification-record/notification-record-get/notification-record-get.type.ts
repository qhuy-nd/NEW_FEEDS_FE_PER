export interface INotificationRecordGetRequest {
  slug: string;
}

export type INotificationRecordGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    title?: string;
    type?: string;
    to?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    status?: "Chưa đọc" | "Đã đọc";
    created_at?: string;
    updated_at?: string;
    tenant_id?: string;
    locale?: string;
    locale_id?: string;
    created_by?: string;
    updated_by?: string;
  };
  meta?: unknown;
};
