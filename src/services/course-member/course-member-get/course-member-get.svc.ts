import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberGetRequest, ICourseMemberGetResponse } from "./course-member-get.type";

class CourseMemberGetSvcCaller extends RxAxiosCaller<
  ICourseMemberGetResponse["data"],
  ICourseMemberGetRequest,
  ICourseMemberGetResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.GET.COURSE_MEMBER_GET, "GET", (raw) => raw.data);
  }
}

export const courseMemberGetSvcCaller = new CourseMemberGetSvcCaller();
