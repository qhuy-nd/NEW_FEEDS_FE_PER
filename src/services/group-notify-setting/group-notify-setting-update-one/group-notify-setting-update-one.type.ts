export interface IGroupNotifySettingUpdateOneRequest {
  id: string;
  social_group?: string[];
  user?: string[];
  notify_new_post?: boolean;
  notify_pending_post?: boolean;
  notify_join_request?: boolean;
}

export type IGroupNotifySettingUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
