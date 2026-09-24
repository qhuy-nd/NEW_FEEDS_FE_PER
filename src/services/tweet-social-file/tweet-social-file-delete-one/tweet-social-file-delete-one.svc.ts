import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_FILE_ROUTERS } from "../router";
import type { ITweetSocialFileDeleteOneRequest, ITweetSocialFileDeleteOneResponse } from "./tweet-social-file-delete-one.type";

class TweetSocialFileDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialFileDeleteOneResponse["data"],
  ITweetSocialFileDeleteOneRequest,
  ITweetSocialFileDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_FILE_ROUTERS.DELETE.TWEET_SOCIAL_FILE_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialFileDeleteOneSvcCaller = new TweetSocialFileDeleteOneSvcCaller();
