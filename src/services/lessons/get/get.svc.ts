import { RxAxiosCaller } from "../../api.svc";
import { API_LESSONS_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class LessonsGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_LESSONS_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const lessonsGetSvcCaller = new LessonsGetSvcCaller();
