import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_MUTE_ROUTERS } from "../router";
import type { ITweetMuteGetRequest, ITweetMuteGetResponse } from "./tweet-mute-get.type";

class TweetMuteGetSvcCaller extends RxAxiosCaller<
  ITweetMuteGetResponse["data"],
  ITweetMuteGetRequest,
  ITweetMuteGetResponse
> {
  constructor() {
    super(API_TWEET_MUTE_ROUTERS.GET.TWEET_MUTE_GET, "GET", (raw) => raw.data);
  }
}

export const tweetMuteGetSvcCaller = new TweetMuteGetSvcCaller();
