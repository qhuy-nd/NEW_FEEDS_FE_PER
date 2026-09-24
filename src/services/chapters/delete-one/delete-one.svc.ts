import { RxAxiosCaller } from "../../api.svc";
import { API_CHAPTERS_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class ChaptersDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_CHAPTERS_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const chaptersDeleteOneSvcCaller = new ChaptersDeleteOneSvcCaller();
