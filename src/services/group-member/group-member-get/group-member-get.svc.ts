import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_MEMBER_ROUTERS } from "../router";
import type { IGroupMemberGetRequest, IGroupMemberGetResponse } from "./group-member-get.type";

class GroupMemberGetSvcCaller extends RxAxiosCaller<
  IGroupMemberGetResponse["data"],
  IGroupMemberGetRequest,
  IGroupMemberGetResponse
> {
  constructor() {
    super(API_GROUP_MEMBER_ROUTERS.GET.GROUP_MEMBER_GET, "GET", (raw) => raw.data);
  }
}

export const groupMemberGetSvcCaller = new GroupMemberGetSvcCaller();
