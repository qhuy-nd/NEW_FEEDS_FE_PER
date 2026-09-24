import { RxAxiosCaller } from "../../api.svc";
import { API_QUESTIONS_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class QuestionsCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_QUESTIONS_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const questionsCreateOneSvcCaller = new QuestionsCreateOneSvcCaller();
