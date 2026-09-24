import { RxAxiosCaller } from "../../api.svc";
import { API_USER_LEARNING_PATH_ROUTERS } from "../router";
import type { IUserLearningPathUpdateOneRequest, IUserLearningPathUpdateOneResponse } from "./user-learning-path-update-one.type";

class UserLearningPathUpdateOneSvcCaller extends RxAxiosCaller<
  IUserLearningPathUpdateOneResponse["data"],
  IUserLearningPathUpdateOneRequest,
  IUserLearningPathUpdateOneResponse
> {
  constructor() {
    super(API_USER_LEARNING_PATH_ROUTERS.PUT.USER_LEARNING_PATH_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const userLearningPathUpdateOneSvcCaller = new UserLearningPathUpdateOneSvcCaller();
