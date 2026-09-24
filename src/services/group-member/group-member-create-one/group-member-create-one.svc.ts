import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MEMBER_ROUTERS } from "../router";
import type { IGroupMemberCreateOneRequest, IGroupMemberCreateOneResponse } from "./group-member-create-one.type";

class GroupMemberCreateOneSvcCaller extends RxAxiosCaller<
  IGroupMemberCreateOneResponse["data"],
  IGroupMemberCreateOneRequest,
  IGroupMemberCreateOneResponse
> {
  constructor() {
    super(API_GROUP_MEMBER_ROUTERS.POST.GROUP_MEMBER_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupMemberCreateOneSvcCaller = new GroupMemberCreateOneSvcCaller();
