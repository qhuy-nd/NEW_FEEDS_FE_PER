import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberUpdateOneRequest, ICourseMemberUpdateOneResponse } from "./course-member-update-one.type";

class CourseMemberUpdateOneSvcCaller extends RxAxiosCaller<
  ICourseMemberUpdateOneResponse["data"],
  ICourseMemberUpdateOneRequest,
  ICourseMemberUpdateOneResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.PUT.COURSE_MEMBER_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const courseMemberUpdateOneSvcCaller = new CourseMemberUpdateOneSvcCaller();
