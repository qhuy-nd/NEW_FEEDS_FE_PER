import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_BAN_ROUTERS } from "../router";
import type { IGroupBanGetlistRequest, IGroupBanGetlistResponse } from "./group-ban-getlist.type";

class GroupBanGetlistSvcCaller extends RxAxiosCaller<
  IGroupBanGetlistResponse["data"],
  IGroupBanGetlistRequest,
  IGroupBanGetlistResponse
> {
  constructor() {
    super(API_GROUP_BAN_ROUTERS.GET.GROUP_BAN_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupBanGetlistSvcCaller = new GroupBanGetlistSvcCaller();
