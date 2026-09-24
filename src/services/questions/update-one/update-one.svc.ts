import { RxAxiosCaller } from "../../api.svc";
import { API_QUESTIONS_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class QuestionsUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_QUESTIONS_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const questionsUpdateOneSvcCaller = new QuestionsUpdateOneSvcCaller();
