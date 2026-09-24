import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IBanRequest, IBanResponse } from "./ban.type";

class GroupBanSvcCaller extends RxAxiosCaller<
  IBanResponse["data"],
  IBanRequest,
  IBanResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.POST.BAN, "POST", (raw) => raw.data);
  }
}

export const groupBanSvcCaller = new GroupBanSvcCaller();
