import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IMembersRequest, IMembersResponse } from "./members.type";

class CoursesMembersSvcCaller extends RxAxiosCaller<
  IMembersResponse["data"],
  IMembersRequest,
  IMembersResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.GET.MEMBERS, "GET", (raw) => raw.data);
  }
}

export const coursesMembersSvcCaller = new CoursesMembersSvcCaller();
