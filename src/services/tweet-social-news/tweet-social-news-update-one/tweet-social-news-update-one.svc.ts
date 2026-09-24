import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_NEWS_ROUTERS } from "../router";
import type { ITweetSocialNewsUpdateOneRequest, ITweetSocialNewsUpdateOneResponse } from "./tweet-social-news-update-one.type";

class TweetSocialNewsUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialNewsUpdateOneResponse["data"],
  ITweetSocialNewsUpdateOneRequest,
  ITweetSocialNewsUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_NEWS_ROUTERS.PUT.TWEET_SOCIAL_NEWS_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialNewsUpdateOneSvcCaller = new TweetSocialNewsUpdateOneSvcCaller();
