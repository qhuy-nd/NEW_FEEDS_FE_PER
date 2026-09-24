import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_IMAGE_ROUTERS } from "../router";
import type { ITweetSocialImageUpdateOneRequest, ITweetSocialImageUpdateOneResponse } from "./tweet-social-image-update-one.type";

class TweetSocialImageUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialImageUpdateOneResponse["data"],
  ITweetSocialImageUpdateOneRequest,
  ITweetSocialImageUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_IMAGE_ROUTERS.PUT.TWEET_SOCIAL_IMAGE_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialImageUpdateOneSvcCaller = new TweetSocialImageUpdateOneSvcCaller();
