import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventGetlistRequest, ITweetSocialEventGetlistResponse } from "./tweet-social-event-getlist.type";

class TweetSocialEventGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialEventGetlistResponse["data"],
  ITweetSocialEventGetlistRequest,
  ITweetSocialEventGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.GET.TWEET_SOCIAL_EVENT_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialEventGetlistSvcCaller = new TweetSocialEventGetlistSvcCaller();
