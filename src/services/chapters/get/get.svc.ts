import { RxAxiosCaller } from "../../api.svc";
import { API_CHAPTERS_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class ChaptersGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_CHAPTERS_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const chaptersGetSvcCaller = new ChaptersGetSvcCaller();
