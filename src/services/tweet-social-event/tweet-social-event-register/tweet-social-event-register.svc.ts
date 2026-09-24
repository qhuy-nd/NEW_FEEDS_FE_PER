import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_EVENT_ROUTERS } from "../router";
import type { ITweetSocialEventRegisterRequest, ITweetSocialEventRegisterResponse } from "./tweet-social-event-register.type";

class TweetSocialEventRegisterSvcCaller extends RxAxiosCaller<
  ITweetSocialEventRegisterResponse["data"],
  ITweetSocialEventRegisterRequest,
  ITweetSocialEventRegisterResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_EVENT_ROUTERS.POST.TWEET_SOCIAL_EVENT_REGISTER, "POST", (raw) => raw.data);
  }
}

export const tweetSocialEventRegisterSvcCaller = new TweetSocialEventRegisterSvcCaller();
