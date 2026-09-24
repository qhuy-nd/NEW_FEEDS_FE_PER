import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IUnpinGroupRequest, IUnpinGroupResponse } from "./unpin-group.type";

class GroupUnpinGroupSvcCaller extends RxAxiosCaller<
  IUnpinGroupResponse["data"],
  IUnpinGroupRequest,
  IUnpinGroupResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.DELETE.UNPIN_GROUP, "DELETE", (raw) => raw.data);
  }
}

export const groupUnpinGroupSvcCaller = new GroupUnpinGroupSvcCaller();
