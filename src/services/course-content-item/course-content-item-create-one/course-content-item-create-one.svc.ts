import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CONTENT_ITEM_ROUTERS } from "../router";
import type { ICourseContentItemCreateOneRequest, ICourseContentItemCreateOneResponse } from "./course-content-item-create-one.type";

class CourseContentItemCreateOneSvcCaller extends RxAxiosCaller<
  ICourseContentItemCreateOneResponse["data"],
  ICourseContentItemCreateOneRequest,
  ICourseContentItemCreateOneResponse
> {
  constructor() {
    super(API_COURSE_CONTENT_ITEM_ROUTERS.POST.COURSE_CONTENT_ITEM_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const courseContentItemCreateOneSvcCaller = new CourseContentItemCreateOneSvcCaller();
