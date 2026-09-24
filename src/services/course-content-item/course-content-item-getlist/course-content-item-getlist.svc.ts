import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CONTENT_ITEM_ROUTERS } from "../router";
import type { ICourseContentItemGetlistRequest, ICourseContentItemGetlistResponse } from "./course-content-item-getlist.type";

class CourseContentItemGetlistSvcCaller extends RxAxiosCaller<
  ICourseContentItemGetlistResponse["data"],
  ICourseContentItemGetlistRequest,
  ICourseContentItemGetlistResponse
> {
  constructor() {
    super(API_COURSE_CONTENT_ITEM_ROUTERS.GET.COURSE_CONTENT_ITEM_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseContentItemGetlistSvcCaller = new CourseContentItemGetlistSvcCaller();
