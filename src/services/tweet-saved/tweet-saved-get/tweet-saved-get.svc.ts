import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SAVED_ROUTERS } from "../router";
import type { ITweetSavedGetRequest, ITweetSavedGetResponse } from "./tweet-saved-get.type";

class TweetSavedGetSvcCaller extends RxAxiosCaller<
  ITweetSavedGetResponse["data"],
  ITweetSavedGetRequest,
  ITweetSavedGetResponse
> {
  constructor() {
    super(API_TWEET_SAVED_ROUTERS.GET.TWEET_SAVED_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSavedGetSvcCaller = new TweetSavedGetSvcCaller();
