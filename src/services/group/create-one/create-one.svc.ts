import { RxAxiosCaller } from "../../api.svc";
import { API_GROUP_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class GroupCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_GROUP_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const groupCreateOneSvcCaller = new GroupCreateOneSvcCaller();
