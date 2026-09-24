import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class DiscussionsCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const discussionsCreateOneSvcCaller = new DiscussionsCreateOneSvcCaller();
