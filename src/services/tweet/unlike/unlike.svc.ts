import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IUnlikeRequest, IUnlikeResponse } from "./unlike.type";

class TweetUnlikeSvcCaller extends RxAxiosCaller<
  IUnlikeResponse["data"],
  IUnlikeRequest,
  IUnlikeResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.DELETE.UNLIKE, "DELETE", (raw) => raw.data);
  }
}

export const tweetUnlikeSvcCaller = new TweetUnlikeSvcCaller();
