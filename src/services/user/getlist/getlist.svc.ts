import { RxAxiosCaller } from "../../api.svc";
import { API_USER_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class UserGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_USER_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const userGetlistSvcCaller = new UserGetlistSvcCaller();
