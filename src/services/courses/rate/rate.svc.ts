import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IRateRequest, IRateResponse } from "./rate.type";

class CoursesRateSvcCaller extends RxAxiosCaller<
  IRateResponse["data"],
  IRateRequest,
  IRateResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.POST.RATE, "POST", (raw) => raw.data);
  }
}

export const coursesRateSvcCaller = new CoursesRateSvcCaller();
