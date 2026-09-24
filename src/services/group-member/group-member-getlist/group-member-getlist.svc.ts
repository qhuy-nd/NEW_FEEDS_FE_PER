import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MEMBER_ROUTERS } from "../router";
import type { IGroupMemberGetlistRequest, IGroupMemberGetlistResponse } from "./group-member-getlist.type";

class GroupMemberGetlistSvcCaller extends RxAxiosCaller<
  IGroupMemberGetlistResponse["data"],
  IGroupMemberGetlistRequest,
  IGroupMemberGetlistResponse
> {
  constructor() {
    super(API_GROUP_MEMBER_ROUTERS.GET.GROUP_MEMBER_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupMemberGetlistSvcCaller = new GroupMemberGetlistSvcCaller();
