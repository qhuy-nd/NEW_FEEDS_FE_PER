import { RxAxiosCaller } from "../../api.svc";
import { API_USER_RATING_ROUTERS } from "../router";
import type { IUserRatingGetlistRequest, IUserRatingGetlistResponse } from "./user-rating-getlist.type";

class UserRatingGetlistSvcCaller extends RxAxiosCaller<
  IUserRatingGetlistResponse["data"],
  IUserRatingGetlistRequest,
  IUserRatingGetlistResponse
> {
  constructor() {
    super(API_USER_RATING_ROUTERS.GET.USER_RATING_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userRatingGetlistSvcCaller = new UserRatingGetlistSvcCaller();
