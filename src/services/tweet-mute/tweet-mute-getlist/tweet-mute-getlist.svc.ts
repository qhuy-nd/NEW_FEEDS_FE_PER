import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_MUTE_ROUTERS } from "../router";
import type { ITweetMuteGetlistRequest, ITweetMuteGetlistResponse } from "./tweet-mute-getlist.type";

class TweetMuteGetlistSvcCaller extends RxAxiosCaller<
  ITweetMuteGetlistResponse["data"],
  ITweetMuteGetlistRequest,
  ITweetMuteGetlistResponse
> {
  constructor() {
    super(API_TWEET_MUTE_ROUTERS.GET.TWEET_MUTE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetMuteGetlistSvcCaller = new TweetMuteGetlistSvcCaller();
