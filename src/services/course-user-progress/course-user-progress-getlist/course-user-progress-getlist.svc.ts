import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_USER_PROGRESS_ROUTERS } from "../router";
import type { ICourseUserProgressGetlistRequest, ICourseUserProgressGetlistResponse } from "./course-user-progress-getlist.type";

class CourseUserProgressGetlistSvcCaller extends RxAxiosCaller<
  ICourseUserProgressGetlistResponse["data"],
  ICourseUserProgressGetlistRequest,
  ICourseUserProgressGetlistResponse
> {
  constructor() {
    super(API_COURSE_USER_PROGRESS_ROUTERS.GET.COURSE_USER_PROGRESS_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseUserProgressGetlistSvcCaller = new CourseUserProgressGetlistSvcCaller();
