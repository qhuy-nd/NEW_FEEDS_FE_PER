import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VIDEOS_ROUTERS } from "../router";
import type { ITweetSocialVideosUpdateOneRequest, ITweetSocialVideosUpdateOneResponse } from "./tweet-social-videos-update-one.type";

class TweetSocialVideosUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVideosUpdateOneResponse["data"],
  ITweetSocialVideosUpdateOneRequest,
  ITweetSocialVideosUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VIDEOS_ROUTERS.PUT.TWEET_SOCIAL_VIDEOS_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialVideosUpdateOneSvcCaller = new TweetSocialVideosUpdateOneSvcCaller();
