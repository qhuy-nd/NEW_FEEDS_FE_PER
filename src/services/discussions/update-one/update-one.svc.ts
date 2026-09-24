import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class DiscussionsUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const discussionsUpdateOneSvcCaller = new DiscussionsUpdateOneSvcCaller();
