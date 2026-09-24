import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MEMBER_ROUTERS } from "../router";
import type { IGroupMemberUpdateOneRequest, IGroupMemberUpdateOneResponse } from "./group-member-update-one.type";

class GroupMemberUpdateOneSvcCaller extends RxAxiosCaller<
  IGroupMemberUpdateOneResponse["data"],
  IGroupMemberUpdateOneRequest,
  IGroupMemberUpdateOneResponse
> {
  constructor() {
    super(API_GROUP_MEMBER_ROUTERS.PUT.GROUP_MEMBER_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const groupMemberUpdateOneSvcCaller = new GroupMemberUpdateOneSvcCaller();
