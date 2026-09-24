import { RxAxiosCaller } from "../../api.svc";
import { API_MEDIA_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class MediaGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_MEDIA_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const mediaGetSvcCaller = new MediaGetSvcCaller();
