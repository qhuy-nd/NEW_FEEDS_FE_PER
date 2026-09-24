import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SAVED_ROUTERS } from "../router";
import type { ITweetSavedGetlistRequest, ITweetSavedGetlistResponse } from "./tweet-saved-getlist.type";

class TweetSavedGetlistSvcCaller extends RxAxiosCaller<
  ITweetSavedGetlistResponse["data"],
  ITweetSavedGetlistRequest,
  ITweetSavedGetlistResponse
> {
  constructor() {
    super(API_TWEET_SAVED_ROUTERS.GET.TWEET_SAVED_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSavedGetlistSvcCaller = new TweetSavedGetlistSvcCaller();
