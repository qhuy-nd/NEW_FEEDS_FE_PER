import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IJoinRequest, IJoinResponse } from "./join.type";

class GroupJoinSvcCaller extends RxAxiosCaller<
  IJoinResponse["data"],
  IJoinRequest,
  IJoinResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.POST.JOIN, "POST", (raw) => raw.data);
  }
}

export const groupJoinSvcCaller = new GroupJoinSvcCaller();
