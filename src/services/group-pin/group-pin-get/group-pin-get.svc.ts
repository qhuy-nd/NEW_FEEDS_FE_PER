import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_PIN_ROUTERS } from "../router";
import type { IGroupPinGetRequest, IGroupPinGetResponse } from "./group-pin-get.type";

class GroupPinGetSvcCaller extends RxAxiosCaller<
  IGroupPinGetResponse["data"],
  IGroupPinGetRequest,
  IGroupPinGetResponse
> {
  constructor() {
    super(API_GROUP_PIN_ROUTERS.GET.GROUP_PIN_GET, "GET", (raw) => raw.data);
  }
}

export const groupPinGetSvcCaller = new GroupPinGetSvcCaller();
