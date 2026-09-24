import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CONTENT_ITEM_ROUTERS } from "../router";
import type { ICourseContentItemUpdateOneRequest, ICourseContentItemUpdateOneResponse } from "./course-content-item-update-one.type";

class CourseContentItemUpdateOneSvcCaller extends RxAxiosCaller<
  ICourseContentItemUpdateOneResponse["data"],
  ICourseContentItemUpdateOneRequest,
  ICourseContentItemUpdateOneResponse
> {
  constructor() {
    super(API_COURSE_CONTENT_ITEM_ROUTERS.PUT.COURSE_CONTENT_ITEM_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const courseContentItemUpdateOneSvcCaller = new CourseContentItemUpdateOneSvcCaller();
