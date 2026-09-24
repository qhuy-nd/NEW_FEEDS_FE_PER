import { RxAxiosCaller } from "../../api.svc";
import { API_QUESTIONS_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class QuestionsDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_QUESTIONS_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const questionsDeleteOneSvcCaller = new QuestionsDeleteOneSvcCaller();
