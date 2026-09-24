import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CONTENT_ITEM_ROUTERS } from "../router";
import type { ICourseContentItemGetRequest, ICourseContentItemGetResponse } from "./course-content-item-get.type";

class CourseContentItemGetSvcCaller extends RxAxiosCaller<
  ICourseContentItemGetResponse["data"],
  ICourseContentItemGetRequest,
  ICourseContentItemGetResponse
> {
  constructor() {
    super(API_COURSE_CONTENT_ITEM_ROUTERS.GET.COURSE_CONTENT_ITEM_GET, "GET", (raw) => raw.data);
  }
}

export const courseContentItemGetSvcCaller = new CourseContentItemGetSvcCaller();
