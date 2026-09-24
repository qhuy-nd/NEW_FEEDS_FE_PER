import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventDeleteOneRequest, ITweetSocialEventDeleteOneResponse } from "./tweet-social-event-delete-one.type";

class TweetSocialEventDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialEventDeleteOneResponse["data"],
  ITweetSocialEventDeleteOneRequest,
  ITweetSocialEventDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.DELETE.TWEET_SOCIAL_EVENT_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialEventDeleteOneSvcCaller = new TweetSocialEventDeleteOneSvcCaller();
