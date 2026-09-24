import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IAddCartRequest, IAddCartResponse } from "./add-cart.type";

class CoursesAddCartSvcCaller extends RxAxiosCaller<
  IAddCartResponse["data"],
  IAddCartRequest,
  IAddCartResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.POST.ADD_CART, "POST", (raw) => raw.data);
  }
}

export const coursesAddCartSvcCaller = new CoursesAddCartSvcCaller();
