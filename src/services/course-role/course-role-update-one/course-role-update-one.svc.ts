import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_ROLE_ROUTERS } from "../router";
import type { ICourseRoleUpdateOneRequest, ICourseRoleUpdateOneResponse } from "./course-role-update-one.type";

class CourseRoleUpdateOneSvcCaller extends RxAxiosCaller<
  ICourseRoleUpdateOneResponse["data"],
  ICourseRoleUpdateOneRequest,
  ICourseRoleUpdateOneResponse
> {
  constructor() {
    super(API_COURSE_ROLE_ROUTERS.PUT.COURSE_ROLE_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const courseRoleUpdateOneSvcCaller = new CourseRoleUpdateOneSvcCaller();
