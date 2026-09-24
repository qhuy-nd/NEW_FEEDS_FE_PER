import { RxAxiosCaller } from "../../api.svc";
import { API_USER_EXAM_RESULT_ROUTERS } from "../router";
import type { IUserExamResultGetlistRequest, IUserExamResultGetlistResponse } from "./user-exam-result-getlist.type";

class UserExamResultGetlistSvcCaller extends RxAxiosCaller<
  IUserExamResultGetlistResponse["data"],
  IUserExamResultGetlistRequest,
  IUserExamResultGetlistResponse
> {
  constructor() {
    super(API_USER_EXAM_RESULT_ROUTERS.GET.USER_EXAM_RESULT_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userExamResultGetlistSvcCaller = new UserExamResultGetlistSvcCaller();
