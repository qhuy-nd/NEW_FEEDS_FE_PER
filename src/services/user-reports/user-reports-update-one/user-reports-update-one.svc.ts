import { RxAxiosCaller } from "../../api.svc";
import { API_USER_REPORTS_ROUTERS } from "../router";
import type { IUserReportsUpdateOneRequest, IUserReportsUpdateOneResponse } from "./user-reports-update-one.type";

class UserReportsUpdateOneSvcCaller extends RxAxiosCaller<
  IUserReportsUpdateOneResponse["data"],
  IUserReportsUpdateOneRequest,
  IUserReportsUpdateOneResponse
> {
  constructor() {
    super(API_USER_REPORTS_ROUTERS.PUT.USER_REPORTS_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const userReportsUpdateOneSvcCaller = new UserReportsUpdateOneSvcCaller();
