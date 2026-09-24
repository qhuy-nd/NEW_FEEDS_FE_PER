import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VIDEOS_ROUTERS } from "../router";
import type { ITweetSocialVideosGetlistRequest, ITweetSocialVideosGetlistResponse } from "./tweet-social-videos-getlist.type";

class TweetSocialVideosGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialVideosGetlistResponse["data"],
  ITweetSocialVideosGetlistRequest,
  ITweetSocialVideosGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VIDEOS_ROUTERS.GET.TWEET_SOCIAL_VIDEOS_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialVideosGetlistSvcCaller = new TweetSocialVideosGetlistSvcCaller();
