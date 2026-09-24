import { RxAxiosCaller } from "../../api.svc";
import { API_USER_ROUTERS } from "../router";
import type { IFollowRequest, IFollowResponse } from "./follow.type";

class UserFollowSvcCaller extends RxAxiosCaller<
  IFollowResponse["data"],
  IFollowRequest,
  IFollowResponse
> {
  constructor() {
    super(API_USER_ROUTERS.POST.FOLLOW, "POST", (raw) => raw.data);
  }
}

export const userFollowSvcCaller = new UserFollowSvcCaller();
