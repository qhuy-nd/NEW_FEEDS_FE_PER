import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_NEWS_ROUTERS } from "../router";
import type { ITweetSocialNewsGetRequest, ITweetSocialNewsGetResponse } from "./tweet-social-news-get.type";

class TweetSocialNewsGetSvcCaller extends RxAxiosCaller<
  ITweetSocialNewsGetResponse["data"],
  ITweetSocialNewsGetRequest,
  ITweetSocialNewsGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_NEWS_ROUTERS.GET.TWEET_SOCIAL_NEWS_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialNewsGetSvcCaller = new TweetSocialNewsGetSvcCaller();
