import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { ILikeRequest, ILikeResponse } from "./like.type";

class TweetLikeSvcCaller extends RxAxiosCaller<
  ILikeResponse["data"],
  ILikeRequest,
  ILikeResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.LIKE, "POST", (raw) => raw.data);
  }
}

export const tweetLikeSvcCaller = new TweetLikeSvcCaller();
