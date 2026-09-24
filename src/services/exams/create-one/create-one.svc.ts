import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class ExamsCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const examsCreateOneSvcCaller = new ExamsCreateOneSvcCaller();
