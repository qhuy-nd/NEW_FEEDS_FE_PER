import { RxAxiosCaller } from "../../api.svc";
import { API_ENTITY_LIKE_ROUTERS } from "../router";
import type { IEntityLikeGetRequest, IEntityLikeGetResponse } from "./entity-like-get.type";

class EntityLikeGetSvcCaller extends RxAxiosCaller<
  IEntityLikeGetResponse["data"],
  IEntityLikeGetRequest,
  IEntityLikeGetResponse
> {
  constructor() {
    super(API_ENTITY_LIKE_ROUTERS.GET.ENTITY_LIKE_GET, "GET", (raw) => raw.data);
  }
}

export const entityLikeGetSvcCaller = new EntityLikeGetSvcCaller();
