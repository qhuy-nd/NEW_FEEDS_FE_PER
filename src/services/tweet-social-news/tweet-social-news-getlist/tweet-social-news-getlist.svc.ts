import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_NEWS_ROUTERS } from "../router";
import type { ITweetSocialNewsGetlistRequest, ITweetSocialNewsGetlistResponse } from "./tweet-social-news-getlist.type";

class TweetSocialNewsGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialNewsGetlistResponse["data"],
  ITweetSocialNewsGetlistRequest,
  ITweetSocialNewsGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_NEWS_ROUTERS.GET.TWEET_SOCIAL_NEWS_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialNewsGetlistSvcCaller = new TweetSocialNewsGetlistSvcCaller();
