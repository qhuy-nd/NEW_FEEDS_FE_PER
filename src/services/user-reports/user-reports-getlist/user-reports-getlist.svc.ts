import { RxAxiosCaller } from "../../api.svc";
import { API_USER_REPORTS_ROUTERS } from "../router";
import type { IUserReportsGetlistRequest, IUserReportsGetlistResponse } from "./user-reports-getlist.type";

class UserReportsGetlistSvcCaller extends RxAxiosCaller<
  IUserReportsGetlistResponse["data"],
  IUserReportsGetlistRequest,
  IUserReportsGetlistResponse
> {
  constructor() {
    super(API_USER_REPORTS_ROUTERS.GET.USER_REPORTS_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userReportsGetlistSvcCaller = new UserReportsGetlistSvcCaller();
