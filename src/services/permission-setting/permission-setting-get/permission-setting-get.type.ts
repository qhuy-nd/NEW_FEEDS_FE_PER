export interface IPermissionSettingGetRequest {
  slug: string;
}

export type IPermissionSettingGetResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    key?: "Tạo nhóm" | "Tạo khoá học" | "Quản trị khoá học toàn hệ thống";
    title?: string;
    allow_all?: boolean;
    allow_roles?: "Admin hệ thống" | "Thành viên";
    allow_users?: {
      _id?: string;
      username?: string;
      email?: string;
      first_name?: string;
      last_name?: string;
      full_name?: string;
      featured_image?: string;
      cover?: string;
      phone?: number;
      password?: string;
      birthday?: string;
      role_system?: "user";
      is_active?: boolean;
      role?: string[];
      nickname?: string;
      created_at?: string;
      updated_at?: string;
      tenant_id?: string;
      locale?: string;
      locale_id?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    is_active?: boolean;
    note?: string;
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
