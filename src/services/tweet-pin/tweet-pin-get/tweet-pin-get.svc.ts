import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_PIN_ROUTERS } from "../router";
import type { ITweetPinGetRequest, ITweetPinGetResponse } from "./tweet-pin-get.type";

class TweetPinGetSvcCaller extends RxAxiosCaller<
  ITweetPinGetResponse["data"],
  ITweetPinGetRequest,
  ITweetPinGetResponse
> {
  constructor() {
    super(API_TWEET_PIN_ROUTERS.GET.TWEET_PIN_GET, "GET", (raw) => raw.data);
  }
}

export const tweetPinGetSvcCaller = new TweetPinGetSvcCaller();
