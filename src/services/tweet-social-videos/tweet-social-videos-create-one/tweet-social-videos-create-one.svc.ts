import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VIDEOS_ROUTERS } from "../router";
import type { ITweetSocialVideosCreateOneRequest, ITweetSocialVideosCreateOneResponse } from "./tweet-social-videos-create-one.type";

class TweetSocialVideosCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVideosCreateOneResponse["data"],
  ITweetSocialVideosCreateOneRequest,
  ITweetSocialVideosCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VIDEOS_ROUTERS.POST.TWEET_SOCIAL_VIDEOS_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialVideosCreateOneSvcCaller = new TweetSocialVideosCreateOneSvcCaller();
