import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IProgressRequest, IProgressResponse } from "./progress.type";

class CoursesProgressSvcCaller extends RxAxiosCaller<
  IProgressResponse["data"],
  IProgressRequest,
  IProgressResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.POST.PROGRESS, "POST", (raw) => raw.data);
  }
}

export const coursesProgressSvcCaller = new CoursesProgressSvcCaller();
