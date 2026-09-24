import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberDeleteOneRequest, ICourseMemberDeleteOneResponse } from "./course-member-delete-one.type";

class CourseMemberDeleteOneSvcCaller extends RxAxiosCaller<
  ICourseMemberDeleteOneResponse["data"],
  ICourseMemberDeleteOneRequest,
  ICourseMemberDeleteOneResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.DELETE.COURSE_MEMBER_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const courseMemberDeleteOneSvcCaller = new CourseMemberDeleteOneSvcCaller();
