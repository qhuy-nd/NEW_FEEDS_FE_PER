import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class CoursesGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const coursesGetSvcCaller = new CoursesGetSvcCaller();
