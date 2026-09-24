import { RxAxiosCaller } from "../../api.svc";
import { API_USER_FOLLOW_ROUTERS } from "../router";
import type { IUserFollowGetRequest, IUserFollowGetResponse } from "./user-follow-get.type";

class UserFollowGetSvcCaller extends RxAxiosCaller<
  IUserFollowGetResponse["data"],
  IUserFollowGetRequest,
  IUserFollowGetResponse
> {
  constructor() {
    super(API_USER_FOLLOW_ROUTERS.GET.USER_FOLLOW_GET, "GET", (raw) => raw.data);
  }
}

export const userFollowGetSvcCaller = new UserFollowGetSvcCaller();
