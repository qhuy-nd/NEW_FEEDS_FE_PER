export interface IUpdateOneRequest {
  id: string;
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
}

export type IUpdateOneResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
