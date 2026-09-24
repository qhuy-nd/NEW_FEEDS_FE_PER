import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_FILE_ROUTERS } from "../router";
import type { ITweetSocialFileCreateOneRequest, ITweetSocialFileCreateOneResponse } from "./tweet-social-file-create-one.type";

class TweetSocialFileCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialFileCreateOneResponse["data"],
  ITweetSocialFileCreateOneRequest,
  ITweetSocialFileCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_FILE_ROUTERS.POST.TWEET_SOCIAL_FILE_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialFileCreateOneSvcCaller = new TweetSocialFileCreateOneSvcCaller();
