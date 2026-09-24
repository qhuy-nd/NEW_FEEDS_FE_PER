import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { ILikeRequest, ILikeResponse } from "./like.type";

class DiscussionsLikeSvcCaller extends RxAxiosCaller<
  ILikeResponse["data"],
  ILikeRequest,
  ILikeResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.POST.LIKE, "POST", (raw) => raw.data);
  }
}

export const discussionsLikeSvcCaller = new DiscussionsLikeSvcCaller();
