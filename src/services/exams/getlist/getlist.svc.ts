import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class ExamsGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const examsGetlistSvcCaller = new ExamsGetlistSvcCaller();
