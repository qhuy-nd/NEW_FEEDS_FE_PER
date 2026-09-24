import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_PIN_ROUTERS } from "../router";
import type { IGroupPinGetlistRequest, IGroupPinGetlistResponse } from "./group-pin-getlist.type";

class GroupPinGetlistSvcCaller extends RxAxiosCaller<
  IGroupPinGetlistResponse["data"],
  IGroupPinGetlistRequest,
  IGroupPinGetlistResponse
> {
  constructor() {
    super(API_GROUP_PIN_ROUTERS.GET.GROUP_PIN_GETLIST, "GET", (raw) => raw.data);
  }
}

export const groupPinGetlistSvcCaller = new GroupPinGetlistSvcCaller();
