import { RxAxiosCaller } from "../../api.svc";
import { API_USER_LEARNING_PATH_ROUTERS } from "../router";
import type { IUserLearningPathCreateOneRequest, IUserLearningPathCreateOneResponse } from "./user-learning-path-create-one.type";

class UserLearningPathCreateOneSvcCaller extends RxAxiosCaller<
  IUserLearningPathCreateOneResponse["data"],
  IUserLearningPathCreateOneRequest,
  IUserLearningPathCreateOneResponse
> {
  constructor() {
    super(API_USER_LEARNING_PATH_ROUTERS.POST.USER_LEARNING_PATH_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const userLearningPathCreateOneSvcCaller = new UserLearningPathCreateOneSvcCaller();
