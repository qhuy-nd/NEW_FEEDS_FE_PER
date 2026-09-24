import { RxAxiosCaller } from "../../api.svc";
import { API_USER_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class UserGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_USER_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const userGetSvcCaller = new UserGetSvcCaller();
