import { RxAxiosCaller } from "../../api.svc";
import { API_USER_LEARNING_PATH_ROUTERS } from "../router";
import type { IUserLearningPathDeleteOneRequest, IUserLearningPathDeleteOneResponse } from "./user-learning-path-delete-one.type";

class UserLearningPathDeleteOneSvcCaller extends RxAxiosCaller<
  IUserLearningPathDeleteOneResponse["data"],
  IUserLearningPathDeleteOneRequest,
  IUserLearningPathDeleteOneResponse
> {
  constructor() {
    super(API_USER_LEARNING_PATH_ROUTERS.DELETE.USER_LEARNING_PATH_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const userLearningPathDeleteOneSvcCaller = new UserLearningPathDeleteOneSvcCaller();
