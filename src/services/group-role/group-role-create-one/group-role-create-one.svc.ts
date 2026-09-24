import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROLE_ROUTERS } from "../router";
import type { IGroupRoleCreateOneRequest, IGroupRoleCreateOneResponse } from "./group-role-create-one.type";

class GroupRoleCreateOneSvcCaller extends RxAxiosCaller<
  IGroupRoleCreateOneResponse["data"],
  IGroupRoleCreateOneRequest,
  IGroupRoleCreateOneResponse
> {
  constructor() {
    super(API_GROUP_ROLE_ROUTERS.POST.GROUP_ROLE_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupRoleCreateOneSvcCaller = new GroupRoleCreateOneSvcCaller();
