import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_PIN_ROUTERS } from "../router";
import type { ITweetPinGetlistRequest, ITweetPinGetlistResponse } from "./tweet-pin-getlist.type";

class TweetPinGetlistSvcCaller extends RxAxiosCaller<
  ITweetPinGetlistResponse["data"],
  ITweetPinGetlistRequest,
  ITweetPinGetlistResponse
> {
  constructor() {
    super(API_TWEET_PIN_ROUTERS.GET.TWEET_PIN_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetPinGetlistSvcCaller = new TweetPinGetlistSvcCaller();
