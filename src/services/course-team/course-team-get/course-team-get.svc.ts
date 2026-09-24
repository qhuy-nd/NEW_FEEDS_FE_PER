import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_TEAM_ROUTERS } from "../router";
import type { ICourseTeamGetRequest, ICourseTeamGetResponse } from "./course-team-get.type";

class CourseTeamGetSvcCaller extends RxAxiosCaller<
  ICourseTeamGetResponse["data"],
  ICourseTeamGetRequest,
  ICourseTeamGetResponse
> {
  constructor() {
    super(API_COURSE_TEAM_ROUTERS.GET.COURSE_TEAM_GET, "GET", (raw) => raw.data);
  }
}

export const courseTeamGetSvcCaller = new CourseTeamGetSvcCaller();
