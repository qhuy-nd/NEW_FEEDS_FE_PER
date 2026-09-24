import { RxAxiosCaller } from "../../api.svc";
import { API_USER_REPORTS_ROUTERS } from "../router";
import type { IUserReportsGetRequest, IUserReportsGetResponse } from "./user-reports-get.type";

class UserReportsGetSvcCaller extends RxAxiosCaller<
  IUserReportsGetResponse["data"],
  IUserReportsGetRequest,
  IUserReportsGetResponse
> {
  constructor() {
    super(API_USER_REPORTS_ROUTERS.GET.USER_REPORTS_GET, "GET", (raw) => raw.data);
  }
}

export const userReportsGetSvcCaller = new UserReportsGetSvcCaller();
