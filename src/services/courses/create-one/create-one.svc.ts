import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class CoursesCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const coursesCreateOneSvcCaller = new CoursesCreateOneSvcCaller();
