import { RxAxiosCaller } from "../../api.svc";
import { API_QUESTIONS_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class QuestionsGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_QUESTIONS_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const questionsGetSvcCaller = new QuestionsGetSvcCaller();
