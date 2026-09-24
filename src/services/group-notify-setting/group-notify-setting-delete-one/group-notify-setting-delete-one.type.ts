export interface IGroupNotifySettingDeleteOneRequest {
  id: string;
}

export type IGroupNotifySettingDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
