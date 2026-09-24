import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IMuteRequest, IMuteResponse } from "./mute.type";

class TweetMuteSvcCaller extends RxAxiosCaller<
  IMuteResponse["data"],
  IMuteRequest,
  IMuteResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.MUTE, "POST", (raw) => raw.data);
  }
}

export const tweetMuteSvcCaller = new TweetMuteSvcCaller();
