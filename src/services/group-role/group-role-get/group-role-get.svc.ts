import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROLE_ROUTERS } from "../router";
import type { IGroupRoleGetRequest, IGroupRoleGetResponse } from "./group-role-get.type";

class GroupRoleGetSvcCaller extends RxAxiosCaller<
  IGroupRoleGetResponse["data"],
  IGroupRoleGetRequest,
  IGroupRoleGetResponse
> {
  constructor() {
    super(API_GROUP_ROLE_ROUTERS.GET.GROUP_ROLE_GET, "GET", (raw) => raw.data);
  }
}

export const groupRoleGetSvcCaller = new GroupRoleGetSvcCaller();
