import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventUpdateOneRequest, ITweetSocialEventUpdateOneResponse } from "./tweet-social-event-update-one.type";

class TweetSocialEventUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialEventUpdateOneResponse["data"],
  ITweetSocialEventUpdateOneRequest,
  ITweetSocialEventUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.PUT.TWEET_SOCIAL_EVENT_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialEventUpdateOneSvcCaller = new TweetSocialEventUpdateOneSvcCaller();
