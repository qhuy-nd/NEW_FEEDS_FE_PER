import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_HIDDEN_ROUTERS } from "../router";
import type { ITweetHiddenGetRequest, ITweetHiddenGetResponse } from "./tweet-hidden-get.type";

class TweetHiddenGetSvcCaller extends RxAxiosCaller<
  ITweetHiddenGetResponse["data"],
  ITweetHiddenGetRequest,
  ITweetHiddenGetResponse
> {
  constructor() {
    super(API_TWEET_HIDDEN_ROUTERS.GET.TWEET_HIDDEN_GET, "GET", (raw) => raw.data);
  }
}

export const tweetHiddenGetSvcCaller = new TweetHiddenGetSvcCaller();
