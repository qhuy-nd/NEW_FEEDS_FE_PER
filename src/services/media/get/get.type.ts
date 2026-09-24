export interface IGetRequest {
  slug: string;
}

export type IGetResponse = {
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
  };
  meta?: unknown;
};
