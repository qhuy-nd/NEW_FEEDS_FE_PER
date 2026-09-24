import { RxAxiosCaller } from "../../api.svc";
import { API_CHAPTERS_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class ChaptersUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_CHAPTERS_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const chaptersUpdateOneSvcCaller = new ChaptersUpdateOneSvcCaller();
