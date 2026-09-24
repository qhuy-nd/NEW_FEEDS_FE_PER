import { RxAxiosCaller } from "../../api.svc";
import { API_ENTITY_LIKE_ROUTERS } from "../router";
import type { IEntityLikeGetlistRequest, IEntityLikeGetlistResponse } from "./entity-like-getlist.type";

class EntityLikeGetlistSvcCaller extends RxAxiosCaller<
  IEntityLikeGetlistResponse["data"],
  IEntityLikeGetlistRequest,
  IEntityLikeGetlistResponse
> {
  constructor() {
    super(API_ENTITY_LIKE_ROUTERS.GET.ENTITY_LIKE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const entityLikeGetlistSvcCaller = new EntityLikeGetlistSvcCaller();
