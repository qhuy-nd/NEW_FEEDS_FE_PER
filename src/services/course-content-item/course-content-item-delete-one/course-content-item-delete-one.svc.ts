import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CONTENT_ITEM_ROUTERS } from "../router";
import type { ICourseContentItemDeleteOneRequest, ICourseContentItemDeleteOneResponse } from "./course-content-item-delete-one.type";

class CourseContentItemDeleteOneSvcCaller extends RxAxiosCaller<
  ICourseContentItemDeleteOneResponse["data"],
  ICourseContentItemDeleteOneRequest,
  ICourseContentItemDeleteOneResponse
> {
  constructor() {
    super(API_COURSE_CONTENT_ITEM_ROUTERS.DELETE.COURSE_CONTENT_ITEM_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const courseContentItemDeleteOneSvcCaller = new CourseContentItemDeleteOneSvcCaller();
