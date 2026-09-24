import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_BAN_ROUTERS } from "../router";
import type { IGroupBanGetRequest, IGroupBanGetResponse } from "./group-ban-get.type";

class GroupBanGetSvcCaller extends RxAxiosCaller<
  IGroupBanGetResponse["data"],
  IGroupBanGetRequest,
  IGroupBanGetResponse
> {
  constructor() {
    super(API_GROUP_BAN_ROUTERS.GET.GROUP_BAN_GET, "GET", (raw) => raw.data);
  }
}

export const groupBanGetSvcCaller = new GroupBanGetSvcCaller();
