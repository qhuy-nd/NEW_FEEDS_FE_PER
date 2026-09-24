import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IGetlistRequest, IGetlistResponse } from "./getlist.type";

class TweetGetlistSvcCaller extends RxAxiosCaller<
  IGetlistResponse["data"],
  IGetlistRequest,
  IGetlistResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.GET.GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetGetlistSvcCaller = new TweetGetlistSvcCaller();
