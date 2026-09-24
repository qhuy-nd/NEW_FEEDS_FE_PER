import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROLE_ROUTERS } from "../router";
import type { IGroupRoleGetlistRequest, IGroupRoleGetlistResponse } from "./group-role-getlist.type";

class GroupRoleGetlistSvcCaller extends RxAxiosCaller<
  IGroupRoleGetlistResponse["data"],
  IGroupRoleGetlistRequest,
  IGroupRoleGetlistResponse
> {
  constructor() {
    super(API_GROUP_ROLE_ROUTERS.GET.GROUP_ROLE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupRoleGetlistSvcCaller = new GroupRoleGetlistSvcCaller();
