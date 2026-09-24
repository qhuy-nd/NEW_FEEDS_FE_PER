import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_LIKE_ROUTERS } from "../router";
import type { ITweetLikeGetRequest, ITweetLikeGetResponse } from "./tweet-like-get.type";

class TweetLikeGetSvcCaller extends RxAxiosCaller<
  ITweetLikeGetResponse["data"],
  ITweetLikeGetRequest,
  ITweetLikeGetResponse
> {
  constructor() {
    super(API_TWEET_LIKE_ROUTERS.GET.TWEET_LIKE_GET, "GET", (raw) => raw.data);
  }
}

export const tweetLikeGetSvcCaller = new TweetLikeGetSvcCaller();
