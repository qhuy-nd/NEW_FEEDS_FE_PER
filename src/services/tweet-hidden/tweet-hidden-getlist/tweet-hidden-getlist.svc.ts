import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_HIDDEN_ROUTERS } from "../router";
import type { ITweetHiddenGetlistRequest, ITweetHiddenGetlistResponse } from "./tweet-hidden-getlist.type";

class TweetHiddenGetlistSvcCaller extends RxAxiosCaller<
  ITweetHiddenGetlistResponse["data"],
  ITweetHiddenGetlistRequest,
  ITweetHiddenGetlistResponse
> {
  constructor() {
    super(API_TWEET_HIDDEN_ROUTERS.GET.TWEET_HIDDEN_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetHiddenGetlistSvcCaller = new TweetHiddenGetlistSvcCaller();
