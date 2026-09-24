import { RxAxiosCaller } from "../../api.svc";
import { API_LESSONS_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class LessonsUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_LESSONS_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const lessonsUpdateOneSvcCaller = new LessonsUpdateOneSvcCaller();
