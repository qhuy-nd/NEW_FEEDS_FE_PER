import { RxAxiosCaller } from "../../api.svc";
import { API_COURSES_ROUTERS } from "../router";
import type { IGetlistJoinedRequest, IGetlistJoinedResponse } from "./getlist-joined.type";

class CoursesGetlistJoinedSvcCaller extends RxAxiosCaller<
  IGetlistJoinedResponse["data"],
  IGetlistJoinedRequest,
  IGetlistJoinedResponse
> {
  constructor() {
    super(API_COURSES_ROUTERS.GET.GETLIST_JOINED, "GET", (raw) => raw.data);
  }
}

export const coursesGetlistJoinedSvcCaller = new CoursesGetlistJoinedSvcCaller();
