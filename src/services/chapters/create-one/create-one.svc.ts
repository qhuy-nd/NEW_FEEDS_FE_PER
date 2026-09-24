import { RxAxiosCaller } from "../../api.svc";
import { API_CHAPTERS_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class ChaptersCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_CHAPTERS_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const chaptersCreateOneSvcCaller = new ChaptersCreateOneSvcCaller();
