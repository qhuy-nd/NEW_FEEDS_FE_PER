import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_IMAGE_ROUTERS } from "../router";
import type { ITweetSocialImageGetRequest, ITweetSocialImageGetResponse } from "./tweet-social-image-get.type";

class TweetSocialImageGetSvcCaller extends RxAxiosCaller<
  ITweetSocialImageGetResponse["data"],
  ITweetSocialImageGetRequest,
  ITweetSocialImageGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_IMAGE_ROUTERS.GET.TWEET_SOCIAL_IMAGE_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialImageGetSvcCaller = new TweetSocialImageGetSvcCaller();
