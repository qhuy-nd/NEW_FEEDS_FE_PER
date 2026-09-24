import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberCreateOneRequest, ICourseMemberCreateOneResponse } from "./course-member-create-one.type";

class CourseMemberCreateOneSvcCaller extends RxAxiosCaller<
  ICourseMemberCreateOneResponse["data"],
  ICourseMemberCreateOneRequest,
  ICourseMemberCreateOneResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.POST.COURSE_MEMBER_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const courseMemberCreateOneSvcCaller = new CourseMemberCreateOneSvcCaller();
