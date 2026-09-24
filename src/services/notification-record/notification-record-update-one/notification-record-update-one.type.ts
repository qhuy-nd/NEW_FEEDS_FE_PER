export interface INotificationRecordUpdateOneRequest {
  id: string;
  title?: string;
  type?: string;
  to?: string[];
  status?: "Chưa đọc" | "Đã đọc";
}

export type INotificationRecordUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
