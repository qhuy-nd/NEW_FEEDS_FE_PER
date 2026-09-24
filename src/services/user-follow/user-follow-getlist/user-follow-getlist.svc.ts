import { RxAxiosCaller } from "../../api.svc";
import { API_USER_FOLLOW_ROUTERS } from "../router";
import type { IUserFollowGetlistRequest, IUserFollowGetlistResponse } from "./user-follow-getlist.type";

class UserFollowGetlistSvcCaller extends RxAxiosCaller<
  IUserFollowGetlistResponse["data"],
  IUserFollowGetlistRequest,
  IUserFollowGetlistResponse
> {
  constructor() {
    super(API_USER_FOLLOW_ROUTERS.GET.USER_FOLLOW_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userFollowGetlistSvcCaller = new UserFollowGetlistSvcCaller();
