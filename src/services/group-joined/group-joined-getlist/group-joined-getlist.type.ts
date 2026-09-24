export interface IGroupJoinedGetlistRequest {
  page?: number;
  limit?: number;
  q?: string;
  sort?: string;
}

export type IGroupJoinedGetlistResponse = {
  message?: string;
  statusCode?: number;
  data?: {
    _id?: string;
    created_at?: string;
    updated_at?: string;
    tenant_id?: string;
    locale?: string;
    locale_id?: string;
    created_by?: string;
    updated_by?: string;
    cover?: Record<string, unknown>[];
    mangox_mge_group_member_social_group?: {
      _id?: string;
      status?: string;
      role?: string;
      user?: string;
      "!user=eq.@options:user_id"?: string;
      "!status=eq.\"joined\""?: string;
    }[];
  }[];
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
    hasMore?: boolean;
  };
};
