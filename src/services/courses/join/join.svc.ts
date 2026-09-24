import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IJoinRequest, IJoinResponse } from "./join.type";

class CoursesJoinSvcCaller extends RxAxiosCaller<
  IJoinResponse["data"],
  IJoinRequest,
  IJoinResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.POST.JOIN, "POST", (raw) => raw.data);
  }
}

export const coursesJoinSvcCaller = new CoursesJoinSvcCaller();
