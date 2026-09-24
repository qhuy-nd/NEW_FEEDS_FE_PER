import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_FILE_ROUTERS } from "../router";
import type { ITweetSocialFileGetlistRequest, ITweetSocialFileGetlistResponse } from "./tweet-social-file-getlist.type";

class TweetSocialFileGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialFileGetlistResponse["data"],
  ITweetSocialFileGetlistRequest,
  ITweetSocialFileGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_FILE_ROUTERS.GET.TWEET_SOCIAL_FILE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialFileGetlistSvcCaller = new TweetSocialFileGetlistSvcCaller();
