import { RxAxiosCaller } from "../../api.svc";
import { API_LEARNING_PATH_ROUTERS } from "../router";
import type { ILearningPathGetRequest, ILearningPathGetResponse } from "./learning-path-get.type";

class LearningPathGetSvcCaller extends RxAxiosCaller<
  ILearningPathGetResponse["data"],
  ILearningPathGetRequest,
  ILearningPathGetResponse
> {
  constructor() {
    super(API_LEARNING_PATH_ROUTERS.GET.LEARNING_PATH_GET, "GET", (raw) => raw.data);
  }
}

export const learningPathGetSvcCaller = new LearningPathGetSvcCaller();
