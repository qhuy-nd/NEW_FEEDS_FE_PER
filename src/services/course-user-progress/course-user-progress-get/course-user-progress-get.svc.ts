import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_USER_PROGRESS_ROUTERS } from "../router";
import type { ICourseUserProgressGetRequest, ICourseUserProgressGetResponse } from "./course-user-progress-get.type";

class CourseUserProgressGetSvcCaller extends RxAxiosCaller<
  ICourseUserProgressGetResponse["data"],
  ICourseUserProgressGetRequest,
  ICourseUserProgressGetResponse
> {
  constructor() {
    super(API_COURSE_USER_PROGRESS_ROUTERS.GET.COURSE_USER_PROGRESS_GET, "GET", (raw) => raw.data);
  }
}

export const courseUserProgressGetSvcCaller = new CourseUserProgressGetSvcCaller();
