export interface IUserNoteCreateOneRequest {
  content: string;
  timestamp: string;
  lesson?: string;
  title?: string;
}

export type IUserNoteCreateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
