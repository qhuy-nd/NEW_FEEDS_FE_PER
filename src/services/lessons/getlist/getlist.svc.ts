import { RxAxiosCaller } from "../../api.svc";
import { API_LESSONS_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class LessonsGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_LESSONS_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const lessonsGetlistSvcCaller = new LessonsGetlistSvcCaller();
