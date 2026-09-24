import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { ISubmitRequest, ISubmitResponse } from "./submit.type";

class ExamsSubmitSvcCaller extends RxAxiosCaller<
  ISubmitResponse["data"],
  ISubmitRequest,
  ISubmitResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.POST.SUBMIT, "POST", (raw) => raw.data);
  }
}

export const examsSubmitSvcCaller = new ExamsSubmitSvcCaller();
