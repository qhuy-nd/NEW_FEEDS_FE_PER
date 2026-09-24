export interface IGroupNotifySettingGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IGroupNotifySettingGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    social_group?: {
      cover?: Record<string, unknown>[];
    }[];
    user?: {
      _id?: string;
      username?: string;
      full_name?: string;
      nickname?: string;
      featured_image?: Record<string, unknown>[];
    }[];
    notify_new_post?: boolean;
    notify_pending_post?: boolean;
    notify_join_request?: boolean;
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
