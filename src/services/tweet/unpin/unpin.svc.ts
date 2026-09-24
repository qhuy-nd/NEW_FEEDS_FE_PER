import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IUnpinRequest, IUnpinResponse } from "./unpin.type";

class TweetUnpinSvcCaller extends RxAxiosCaller<
  IUnpinResponse["data"],
  IUnpinRequest,
  IUnpinResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.DELETE.UNPIN, "DELETE", (raw) => raw.data);
  }
}

export const tweetUnpinSvcCaller = new TweetUnpinSvcCaller();
