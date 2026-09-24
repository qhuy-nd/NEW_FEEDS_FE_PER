import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IUnsaveRequest, IUnsaveResponse } from "./unsave.type";

class TweetUnsaveSvcCaller extends RxAxiosCaller<
  IUnsaveResponse["data"],
  IUnsaveRequest,
  IUnsaveResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.DELETE.UNSAVE, "DELETE", (raw) => raw.data);
  }
}

export const tweetUnsaveSvcCaller = new TweetUnsaveSvcCaller();
