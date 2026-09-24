import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_ROLE_ROUTERS } from "../router";
import type { ICourseRoleGetRequest, ICourseRoleGetResponse } from "./course-role-get.type";

class CourseRoleGetSvcCaller extends RxAxiosCaller<
  ICourseRoleGetResponse["data"],
  ICourseRoleGetRequest,
  ICourseRoleGetResponse
> {
  constructor() {
    super(API_COURSE_ROLE_ROUTERS.GET.COURSE_ROLE_GET, "GET", (raw) => raw.data);
  }
}

export const courseRoleGetSvcCaller = new CourseRoleGetSvcCaller();
