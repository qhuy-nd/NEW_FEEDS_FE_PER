export interface IUserNoteUpdateOneRequest {
  id: string;
  content?: string;
  timestamp?: string;
  lesson?: string;
  title?: string;
}

export type IUserNoteUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
