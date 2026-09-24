import { RxAxiosCaller } from "../../api.svc";
import { API_USER_REPORTS_ROUTERS } from "../router";
import type { IUserReportsCreateOneRequest, IUserReportsCreateOneResponse } from "./user-reports-create-one.type";

class UserReportsCreateOneSvcCaller extends RxAxiosCaller<
  IUserReportsCreateOneResponse["data"],
  IUserReportsCreateOneRequest,
  IUserReportsCreateOneResponse
> {
  constructor() {
    super(API_USER_REPORTS_ROUTERS.POST.USER_REPORTS_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const userReportsCreateOneSvcCaller = new UserReportsCreateOneSvcCaller();
