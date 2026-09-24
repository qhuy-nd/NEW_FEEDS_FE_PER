import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VIDEOS_ROUTERS } from "../router";
import type { ITweetSocialVideosDeleteOneRequest, ITweetSocialVideosDeleteOneResponse } from "./tweet-social-videos-delete-one.type";

class TweetSocialVideosDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVideosDeleteOneResponse["data"],
  ITweetSocialVideosDeleteOneRequest,
  ITweetSocialVideosDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VIDEOS_ROUTERS.DELETE.TWEET_SOCIAL_VIDEOS_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialVideosDeleteOneSvcCaller = new TweetSocialVideosDeleteOneSvcCaller();
