import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventCreateOneRequest, ITweetSocialEventCreateOneResponse } from "./tweet-social-event-create-one.type";

class TweetSocialEventCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialEventCreateOneResponse["data"],
  ITweetSocialEventCreateOneRequest,
  ITweetSocialEventCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.POST.TWEET_SOCIAL_EVENT_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialEventCreateOneSvcCaller = new TweetSocialEventCreateOneSvcCaller();
