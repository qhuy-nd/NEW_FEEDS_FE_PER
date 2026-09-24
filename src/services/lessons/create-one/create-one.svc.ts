import { RxAxiosCaller } from "../../api.svc";
import { API_LESSONS_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class LessonsCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_LESSONS_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const lessonsCreateOneSvcCaller = new LessonsCreateOneSvcCaller();
