import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSIONS_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class DiscussionsDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_DISCUSSIONS_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const discussionsDeleteOneSvcCaller = new DiscussionsDeleteOneSvcCaller();
