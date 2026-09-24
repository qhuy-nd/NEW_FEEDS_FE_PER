import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberGetlistRequest, ICourseMemberGetlistResponse } from "./course-member-getlist.type";

class CourseMemberGetlistSvcCaller extends RxAxiosCaller<
  ICourseMemberGetlistResponse["data"],
  ICourseMemberGetlistRequest,
  ICourseMemberGetlistResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.GET.COURSE_MEMBER_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseMemberGetlistSvcCaller = new CourseMemberGetlistSvcCaller();
