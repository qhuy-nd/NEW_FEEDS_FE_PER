import { RxAxiosCaller } from "../../api.svc";
import { API_CHAPTERS_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class ChaptersGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_CHAPTERS_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const chaptersGetlistSvcCaller = new ChaptersGetlistSvcCaller();
