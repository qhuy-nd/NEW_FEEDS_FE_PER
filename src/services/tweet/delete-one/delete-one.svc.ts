import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IDeleteOneRequest, IDeleteOneResponse } from "./delete-one.type";

class TweetDeleteOneSvcCaller extends RxAxiosCaller<
  IDeleteOneResponse["data"],
  IDeleteOneRequest,
  IDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.DELETE.DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetDeleteOneSvcCaller = new TweetDeleteOneSvcCaller();
