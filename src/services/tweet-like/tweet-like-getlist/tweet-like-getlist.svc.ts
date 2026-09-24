import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_LIKE_ROUTERS } from "../router";
import type { ITweetLikeGetlistRequest, ITweetLikeGetlistResponse } from "./tweet-like-getlist.type";

class TweetLikeGetlistSvcCaller extends RxAxiosCaller<
  ITweetLikeGetlistResponse["data"],
  ITweetLikeGetlistRequest,
  ITweetLikeGetlistResponse
> {
  constructor() {
    super(API_TWEET_LIKE_ROUTERS.GET.TWEET_LIKE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetLikeGetlistSvcCaller = new TweetLikeGetlistSvcCaller();
