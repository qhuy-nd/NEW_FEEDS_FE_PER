import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_ROLE_ROUTERS } from "../router";
import type { ICourseRoleDeleteOneRequest, ICourseRoleDeleteOneResponse } from "./course-role-delete-one.type";

class CourseRoleDeleteOneSvcCaller extends RxAxiosCaller<
  ICourseRoleDeleteOneResponse["data"],
  ICourseRoleDeleteOneRequest,
  ICourseRoleDeleteOneResponse
> {
  constructor() {
    super(API_COURSE_ROLE_ROUTERS.DELETE.COURSE_ROLE_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const courseRoleDeleteOneSvcCaller = new CourseRoleDeleteOneSvcCaller();
