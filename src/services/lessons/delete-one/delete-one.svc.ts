import { RxAxiosCaller } from "../../api.svc";
import { API_LESSONS_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class LessonsDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_LESSONS_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const lessonsDeleteOneSvcCaller = new LessonsDeleteOneSvcCaller();
