import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_NEWS_ROUTERS } from "../router";
import type { ITweetSocialNewsCreateOneRequest, ITweetSocialNewsCreateOneResponse } from "./tweet-social-news-create-one.type";

class TweetSocialNewsCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialNewsCreateOneResponse["data"],
  ITweetSocialNewsCreateOneRequest,
  ITweetSocialNewsCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_NEWS_ROUTERS.POST.TWEET_SOCIAL_NEWS_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialNewsCreateOneSvcCaller = new TweetSocialNewsCreateOneSvcCaller();
