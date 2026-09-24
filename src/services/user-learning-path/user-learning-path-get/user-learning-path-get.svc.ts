import { RxAxiosCaller } from "../../api.svc";
import { API_USER_LEARNING_PATH_ROUTERS } from "../router";
import type { IUserLearningPathGetRequest, IUserLearningPathGetResponse } from "./user-learning-path-get.type";

class UserLearningPathGetSvcCaller extends RxAxiosCaller<
  IUserLearningPathGetResponse["data"],
  IUserLearningPathGetRequest,
  IUserLearningPathGetResponse
> {
  constructor() {
    super(API_USER_LEARNING_PATH_ROUTERS.GET.USER_LEARNING_PATH_GET, "GET", (raw) => raw.data);
  }
}

export const userLearningPathGetSvcCaller = new UserLearningPathGetSvcCaller();
