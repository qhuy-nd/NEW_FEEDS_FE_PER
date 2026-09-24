import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MEMBER_ROUTERS } from "../router";
import type { IGroupMemberDeleteOneRequest, IGroupMemberDeleteOneResponse } from "./group-member-delete-one.type";

class GroupMemberDeleteOneSvcCaller extends RxAxiosCaller<
  IGroupMemberDeleteOneResponse["data"],
  IGroupMemberDeleteOneRequest,
  IGroupMemberDeleteOneResponse
> {
  constructor() {
    super(API_GROUP_MEMBER_ROUTERS.DELETE.GROUP_MEMBER_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const groupMemberDeleteOneSvcCaller = new GroupMemberDeleteOneSvcCaller();
