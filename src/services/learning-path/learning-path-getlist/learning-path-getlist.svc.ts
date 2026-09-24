import { RxAxiosCaller } from "../../api.svc";
import { API_LEARNING_PATH_ROUTERS } from "../router";
import type { ILearningPathGetlistRequest, ILearningPathGetlistResponse } from "./learning-path-getlist.type";

class LearningPathGetlistSvcCaller extends RxAxiosCaller<
  ILearningPathGetlistResponse["data"],
  ILearningPathGetlistRequest,
  ILearningPathGetlistResponse
> {
  constructor() {
    super(API_LEARNING_PATH_ROUTERS.GET.LEARNING_PATH_GETLIST, "GET", (raw) => raw.data);
  }
}

export const learningPathGetlistSvcCaller = new LearningPathGetlistSvcCaller();
