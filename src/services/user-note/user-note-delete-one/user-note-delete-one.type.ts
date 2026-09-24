export interface IUserNoteDeleteOneRequest {
  id: string;
}

export type IUserNoteDeleteOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
