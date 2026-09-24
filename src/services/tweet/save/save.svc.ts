import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { ISaveRequest, ISaveResponse } from "./save.type";

class TweetSaveSvcCaller extends RxAxiosCaller<
  ISaveResponse["data"],
  ISaveRequest,
  ISaveResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.SAVE, "POST", (raw) => raw.data);
  }
}

export const tweetSaveSvcCaller = new TweetSaveSvcCaller();
