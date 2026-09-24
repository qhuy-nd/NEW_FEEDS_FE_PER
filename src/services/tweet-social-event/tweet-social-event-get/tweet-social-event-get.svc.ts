import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventGetRequest, ITweetSocialEventGetResponse } from "./tweet-social-event-get.type";

class TweetSocialEventGetSvcCaller extends RxAxiosCaller<
  ITweetSocialEventGetResponse["data"],
  ITweetSocialEventGetRequest,
  ITweetSocialEventGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.GET.TWEET_SOCIAL_EVENT_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialEventGetSvcCaller = new TweetSocialEventGetSvcCaller();
