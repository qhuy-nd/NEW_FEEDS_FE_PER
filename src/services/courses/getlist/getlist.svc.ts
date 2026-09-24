import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class CoursesGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const coursesGetlistSvcCaller = new CoursesGetlistSvcCaller();
