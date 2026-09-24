import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_IMAGE_ROUTERS } from "../router";
import type { ITweetSocialImageGetlistRequest, ITweetSocialImageGetlistResponse } from "./tweet-social-image-getlist.type";

class TweetSocialImageGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialImageGetlistResponse["data"],
  ITweetSocialImageGetlistRequest,
  ITweetSocialImageGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_IMAGE_ROUTERS.GET.TWEET_SOCIAL_IMAGE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialImageGetlistSvcCaller = new TweetSocialImageGetlistSvcCaller();
