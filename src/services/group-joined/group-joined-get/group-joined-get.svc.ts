import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_JOINED_ROUTERS } from "../router";
import type { IGroupJoinedGetRequest, IGroupJoinedGetResponse } from "./group-joined-get.type";

class GroupJoinedGetSvcCaller extends RxAxiosCaller<
  IGroupJoinedGetResponse["data"],
  IGroupJoinedGetRequest,
  IGroupJoinedGetResponse
> {
  constructor() {
    super(API_GROUP_JOINED_ROUTERS.GET.GROUP_JOINED_GET, "GET", (raw) => raw.data);
  }
}

export const groupJoinedGetSvcCaller = new GroupJoinedGetSvcCaller();
