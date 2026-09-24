import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_ROLE_ROUTERS } from "../router";
import type { ICourseRoleCreateOneRequest, ICourseRoleCreateOneResponse } from "./course-role-create-one.type";

class CourseRoleCreateOneSvcCaller extends RxAxiosCaller<
  ICourseRoleCreateOneResponse["data"],
  ICourseRoleCreateOneRequest,
  ICourseRoleCreateOneResponse
> {
  constructor() {
    super(API_COURSE_ROLE_ROUTERS.POST.COURSE_ROLE_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const courseRoleCreateOneSvcCaller = new CourseRoleCreateOneSvcCaller();
