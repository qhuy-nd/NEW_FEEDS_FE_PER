import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROLE_ROUTERS } from "../router";
import type { IGroupRoleUpdateOneRequest, IGroupRoleUpdateOneResponse } from "./group-role-update-one.type";

class GroupRoleUpdateOneSvcCaller extends RxAxiosCaller<
  IGroupRoleUpdateOneResponse["data"],
  IGroupRoleUpdateOneRequest,
  IGroupRoleUpdateOneResponse
> {
  constructor() {
    super(API_GROUP_ROLE_ROUTERS.PUT.GROUP_ROLE_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const groupRoleUpdateOneSvcCaller = new GroupRoleUpdateOneSvcCaller();
