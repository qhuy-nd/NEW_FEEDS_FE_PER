import { RxAxiosCaller } from "../../api.svc";
import { API_USER_LEARNING_PATH_ROUTERS } from "../router";
import type { IUserLearningPathGetlistRequest, IUserLearningPathGetlistResponse } from "./user-learning-path-getlist.type";

class UserLearningPathGetlistSvcCaller extends RxAxiosCaller<
  IUserLearningPathGetlistResponse["data"],
  IUserLearningPathGetlistRequest,
  IUserLearningPathGetlistResponse
> {
  constructor() {
    super(API_USER_LEARNING_PATH_ROUTERS.GET.USER_LEARNING_PATH_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userLearningPathGetlistSvcCaller = new UserLearningPathGetlistSvcCaller();
