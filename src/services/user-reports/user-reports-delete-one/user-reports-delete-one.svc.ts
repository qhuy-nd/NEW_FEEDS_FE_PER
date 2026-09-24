import { RxAxiosCaller } from "../../api.svc";
import { API_USER_REPORTS_ROUTERS } from "../router";
import type { IUserReportsDeleteOneRequest, IUserReportsDeleteOneResponse } from "./user-reports-delete-one.type";

class UserReportsDeleteOneSvcCaller extends RxAxiosCaller<
  IUserReportsDeleteOneResponse["data"],
  IUserReportsDeleteOneRequest,
  IUserReportsDeleteOneResponse
> {
  constructor() {
    super(API_USER_REPORTS_ROUTERS.DELETE.USER_REPORTS_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const userReportsDeleteOneSvcCaller = new UserReportsDeleteOneSvcCaller();
