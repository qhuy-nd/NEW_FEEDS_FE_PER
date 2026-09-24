import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IPinRequest, IPinResponse } from "./pin.type";

class TweetPinSvcCaller extends RxAxiosCaller<
  IPinResponse["data"],
  IPinRequest,
  IPinResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.PIN, "POST", (raw) => raw.data);
  }
}

export const tweetPinSvcCaller = new TweetPinSvcCaller();
