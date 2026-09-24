import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class GroupGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const groupGetSvcCaller = new GroupGetSvcCaller();
