import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CART_ROUTERS } from "../router";
import type { ICourseCartGetRequest, ICourseCartGetResponse } from "./course-cart-get.type";

class CourseCartGetSvcCaller extends RxAxiosCaller<
  ICourseCartGetResponse["data"],
  ICourseCartGetRequest,
  ICourseCartGetResponse
> {
  constructor() {
    super(API_COURSE_CART_ROUTERS.GET.COURSE_CART_GET, "GET", (raw) => raw.data);
  }
}

export const courseCartGetSvcCaller = new CourseCartGetSvcCaller();
