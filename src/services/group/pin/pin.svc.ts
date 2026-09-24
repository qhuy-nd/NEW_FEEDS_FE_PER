import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { IPinRequest, IPinResponse } from "./pin.type";

class GroupPinSvcCaller extends RxAxiosCaller<
  IPinResponse["data"],
  IPinRequest,
  IPinResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.POST.PIN, "POST", (raw) => raw.data);
  }
}

export const groupPinSvcCaller = new GroupPinSvcCaller();
