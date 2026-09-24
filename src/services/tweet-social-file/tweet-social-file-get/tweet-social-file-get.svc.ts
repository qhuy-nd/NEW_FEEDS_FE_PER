import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_FILE_ROUTERS } from "../router";
import type { ITweetSocialFileGetRequest, ITweetSocialFileGetResponse } from "./tweet-social-file-get.type";

class TweetSocialFileGetSvcCaller extends RxAxiosCaller<
  ITweetSocialFileGetResponse["data"],
  ITweetSocialFileGetRequest,
  ITweetSocialFileGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_FILE_ROUTERS.GET.TWEET_SOCIAL_FILE_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialFileGetSvcCaller = new TweetSocialFileGetSvcCaller();
