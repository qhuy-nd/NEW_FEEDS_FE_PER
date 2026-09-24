import { RxAxiosCaller } from "../../api.svc";
import { API_QUESTIONS_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class QuestionsGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_QUESTIONS_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const questionsGetlistSvcCaller = new QuestionsGetlistSvcCaller();
