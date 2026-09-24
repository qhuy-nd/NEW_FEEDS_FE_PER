import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IUpdateOneRequest, IUpdateOneResponse } from "./update-one.type";

class TweetUpdateOneSvcCaller extends RxAxiosCaller<
  IUpdateOneResponse["data"],
  IUpdateOneRequest,
  IUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.PUT.UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetUpdateOneSvcCaller = new TweetUpdateOneSvcCaller();
