import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROLE_ROUTERS } from "../router";
import type { IGroupRoleDeleteOneRequest, IGroupRoleDeleteOneResponse } from "./group-role-delete-one.type";

class GroupRoleDeleteOneSvcCaller extends RxAxiosCaller<
  IGroupRoleDeleteOneResponse["data"],
  IGroupRoleDeleteOneRequest,
  IGroupRoleDeleteOneResponse
> {
  constructor() {
    super(API_GROUP_ROLE_ROUTERS.DELETE.GROUP_ROLE_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const groupRoleDeleteOneSvcCaller = new GroupRoleDeleteOneSvcCaller();
