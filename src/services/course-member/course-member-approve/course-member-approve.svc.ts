import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_MEMBER_ROUTERS } from "../router";
import type { ICourseMemberApproveRequest, ICourseMemberApproveResponse } from "./course-member-approve.type";

class CourseMemberApproveSvcCaller extends RxAxiosCaller<
  ICourseMemberApproveResponse["data"],
  ICourseMemberApproveRequest,
  ICourseMemberApproveResponse
> {
  constructor() {
    super(API_COURSE_MEMBER_ROUTERS.PATCH.COURSE_MEMBER_APPROVE, "PATCH", (raw) => raw.data);
  }
}

export const courseMemberApproveSvcCaller = new CourseMemberApproveSvcCaller();
