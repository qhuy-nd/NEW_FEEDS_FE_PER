import { RxAxiosCaller } from "../../api.svc";
import { API_USER_EXAM_RESULT_ROUTERS } from "../router";
import type { IUserExamResultGetRequest, IUserExamResultGetResponse } from "./user-exam-result-get.type";

class UserExamResultGetSvcCaller extends RxAxiosCaller<
  IUserExamResultGetResponse["data"],
  IUserExamResultGetRequest,
  IUserExamResultGetResponse
> {
  constructor() {
    super(API_USER_EXAM_RESULT_ROUTERS.GET.USER_EXAM_RESULT_GET, "GET", (raw) => raw.data);
  }
}

export const userExamResultGetSvcCaller = new UserExamResultGetSvcCaller();
