import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IHideRequest, IHideResponse } from "./hide.type";

class TweetHideSvcCaller extends RxAxiosCaller<
  IHideResponse["data"],
  IHideRequest,
  IHideResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.HIDE, "POST", (raw) => raw.data);
  }
}

export const tweetHideSvcCaller = new TweetHideSvcCaller();
