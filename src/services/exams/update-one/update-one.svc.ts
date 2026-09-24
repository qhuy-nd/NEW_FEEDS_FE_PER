import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class ExamsUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const examsUpdateOneSvcCaller = new ExamsUpdateOneSvcCaller();
