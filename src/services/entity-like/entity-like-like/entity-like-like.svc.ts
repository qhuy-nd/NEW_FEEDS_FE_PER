import { RxAxiosCaller } from "../../api.svc";
import { API_ENTITY_LIKE_ROUTERS } from "../router";
import type { IEntityLikeLikeRequest, IEntityLikeLikeResponse } from "./entity-like-like.type";

class EntityLikeLikeSvcCaller extends RxAxiosCaller<
  IEntityLikeLikeResponse["data"],
  IEntityLikeLikeRequest,
  IEntityLikeLikeResponse
> {
  constructor() {
    super(API_ENTITY_LIKE_ROUTERS.POST.ENTITY_LIKE_LIKE, "POST", (raw) => raw.data);
  }
}

export const entityLikeLikeSvcCaller = new EntityLikeLikeSvcCaller();
