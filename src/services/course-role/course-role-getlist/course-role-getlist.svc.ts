import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_ROLE_ROUTERS } from "../router";
import type { ICourseRoleGetlistRequest, ICourseRoleGetlistResponse } from "./course-role-getlist.type";

class CourseRoleGetlistSvcCaller extends RxAxiosCaller<
  ICourseRoleGetlistResponse["data"],
  ICourseRoleGetlistRequest,
  ICourseRoleGetlistResponse
> {
  constructor() {
    super(API_COURSE_ROLE_ROUTERS.GET.COURSE_ROLE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseRoleGetlistSvcCaller = new CourseRoleGetlistSvcCaller();
