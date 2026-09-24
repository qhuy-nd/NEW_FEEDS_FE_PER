import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_FILE_ROUTERS } from "../router";
import type { ITweetSocialFileUpdateOneRequest, ITweetSocialFileUpdateOneResponse } from "./tweet-social-file-update-one.type";

class TweetSocialFileUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialFileUpdateOneResponse["data"],
  ITweetSocialFileUpdateOneRequest,
  ITweetSocialFileUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_FILE_ROUTERS.PUT.TWEET_SOCIAL_FILE_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialFileUpdateOneSvcCaller = new TweetSocialFileUpdateOneSvcCaller();
