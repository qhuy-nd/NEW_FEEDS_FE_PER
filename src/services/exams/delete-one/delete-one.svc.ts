import { RxAxiosCaller } from "../../api.svc";
import { API_EXAMS_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class ExamsDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_EXAMS_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const examsDeleteOneSvcCaller = new ExamsDeleteOneSvcCaller();
