import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_NEWS_ROUTERS } from "../router";
import type { ITweetSocialNewsDeleteOneRequest, ITweetSocialNewsDeleteOneResponse } from "./tweet-social-news-delete-one.type";

class TweetSocialNewsDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialNewsDeleteOneResponse["data"],
  ITweetSocialNewsDeleteOneRequest,
  ITweetSocialNewsDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_NEWS_ROUTERS.DELETE.TWEET_SOCIAL_NEWS_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialNewsDeleteOneSvcCaller = new TweetSocialNewsDeleteOneSvcCaller();
