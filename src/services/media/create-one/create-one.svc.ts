import { RxAxiosCaller } from "../../api.svc";
import { API_MEDIA_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class MediaCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_MEDIA_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const mediaCreateOneSvcCaller = new MediaCreateOneSvcCaller();
