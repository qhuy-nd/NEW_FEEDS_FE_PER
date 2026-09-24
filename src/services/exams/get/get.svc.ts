import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class ExamsGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const examsGetSvcCaller = new ExamsGetSvcCaller();
