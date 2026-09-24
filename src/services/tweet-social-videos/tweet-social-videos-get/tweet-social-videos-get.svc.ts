import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VIDEOS_ROUTERS } from "../router";
import type { ITweetSocialVideosGetRequest, ITweetSocialVideosGetResponse } from "./tweet-social-videos-get.type";

class TweetSocialVideosGetSvcCaller extends RxAxiosCaller<
  ITweetSocialVideosGetResponse["data"],
  ITweetSocialVideosGetRequest,
  ITweetSocialVideosGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VIDEOS_ROUTERS.GET.TWEET_SOCIAL_VIDEOS_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialVideosGetSvcCaller = new TweetSocialVideosGetSvcCaller();
