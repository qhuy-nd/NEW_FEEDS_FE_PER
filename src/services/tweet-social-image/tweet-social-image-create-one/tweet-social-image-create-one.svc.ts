import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_IMAGE_ROUTERS } from "../router";
import type { ITweetSocialImageCreateOneRequest, ITweetSocialImageCreateOneResponse } from "./tweet-social-image-create-one.type";

class TweetSocialImageCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialImageCreateOneResponse["data"],
  ITweetSocialImageCreateOneRequest,
  ITweetSocialImageCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_IMAGE_ROUTERS.POST.TWEET_SOCIAL_IMAGE_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialImageCreateOneSvcCaller = new TweetSocialImageCreateOneSvcCaller();
