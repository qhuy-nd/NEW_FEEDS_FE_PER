export interface IEntityLikeLikeRequest {
  entity_id: string;
  entity_name?: string;
  type?: string;
}

export type IEntityLikeLikeResponse = {
  message?: string;
  statusCode?: number;
  data?: Record<string, unknown>;
  meta?: unknown;
};
