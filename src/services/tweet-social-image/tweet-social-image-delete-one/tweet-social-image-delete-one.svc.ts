import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_IMAGE_ROUTERS } from "../router";
import type { ITweetSocialImageDeleteOneRequest, ITweetSocialImageDeleteOneResponse } from "./tweet-social-image-delete-one.type";

class TweetSocialImageDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialImageDeleteOneResponse["data"],
  ITweetSocialImageDeleteOneRequest,
  ITweetSocialImageDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_IMAGE_ROUTERS.DELETE.TWEET_SOCIAL_IMAGE_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialImageDeleteOneSvcCaller = new TweetSocialImageDeleteOneSvcCaller();
