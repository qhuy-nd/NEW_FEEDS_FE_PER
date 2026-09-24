import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class DiscussionsGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const discussionsGetlistSvcCaller = new DiscussionsGetlistSvcCaller();
