import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_TEAM_ROUTERS } from "../router";
import type { ICourseTeamGetlistRequest, ICourseTeamGetlistResponse } from "./course-team-getlist.type";

class CourseTeamGetlistSvcCaller extends RxAxiosCaller<
  ICourseTeamGetlistResponse["data"],
  ICourseTeamGetlistRequest,
  ICourseTeamGetlistResponse
> {
  constructor() {
    super(API_COURSE_TEAM_ROUTERS.GET.COURSE_TEAM_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseTeamGetlistSvcCaller = new CourseTeamGetlistSvcCaller();
