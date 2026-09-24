import { RxAxiosCaller } from "../../api.svc";
import { API_COURSE_CART_ROUTERS } from "../router";
import type { ICourseCartGetlistRequest, ICourseCartGetlistResponse } from "./course-cart-getlist.type";

class CourseCartGetlistSvcCaller extends RxAxiosCaller<
  ICourseCartGetlistResponse["data"],
  ICourseCartGetlistRequest,
  ICourseCartGetlistResponse
> {
  constructor() {
    super(API_COURSE_CART_ROUTERS.GET.COURSE_CART_GETLIST, "GET", (raw) => raw.data);
  }
}

export const courseCartGetlistSvcCaller = new CourseCartGetlistSvcCaller();
