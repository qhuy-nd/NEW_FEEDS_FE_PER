import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_JOINED_ROUTERS } from "../router";
import type { IGroupJoinedGetlistRequest, IGroupJoinedGetlistResponse } from "./group-joined-getlist.type";

class GroupJoinedGetlistSvcCaller extends RxAxiosCaller<
  IGroupJoinedGetlistResponse["data"],
  IGroupJoinedGetlistRequest,
  IGroupJoinedGetlistResponse
> {
  constructor() {
    super(API_GROUP_JOINED_ROUTERS.GET.GROUP_JOINED_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupJoinedGetlistSvcCaller = new GroupJoinedGetlistSvcCaller();
