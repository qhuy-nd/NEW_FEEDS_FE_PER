import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class CoursesDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const coursesDeleteOneSvcCaller = new CoursesDeleteOneSvcCaller();
