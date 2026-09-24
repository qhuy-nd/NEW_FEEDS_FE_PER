import { RxAxiosCaller } from "../../api.svc";
import { API_USER_RATING_ROUTERS } from "../router";
import type { IUserRatingGetRequest, IUserRatingGetResponse } from "./user-rating-get.type";

class UserRatingGetSvcCaller extends RxAxiosCaller<
  IUserRatingGetResponse["data"],
  IUserRatingGetRequest,
  IUserRatingGetResponse
> {
  constructor() {
    super(API_USER_RATING_ROUTERS.GET.USER_RATING_GET, "GET", (raw) => raw.data);
  }
}

export const userRatingGetSvcCaller = new UserRatingGetSvcCaller();
