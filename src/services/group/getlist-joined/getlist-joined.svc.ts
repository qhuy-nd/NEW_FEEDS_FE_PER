import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IGetlistJoinedRequest, IGetlistJoinedResponse } from "./getlist-joined.type";

class GroupGetlistJoinedSvcCaller extends RxAxiosCaller<
  IGetlistJoinedResponse["data"],
  IGetlistJoinedRequest,
  IGetlistJoinedResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.GET.GETLIST_JOINED, "GET", (raw) => raw.data);
  }
}

export const groupGetlistJoinedSvcCaller = new GroupGetlistJoinedSvcCaller();
