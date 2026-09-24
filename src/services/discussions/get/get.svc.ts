import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class DiscussionsGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const discussionsGetSvcCaller = new DiscussionsGetSvcCaller();
