import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { IGetRequest, IGetResponse } from "./get.type";

class TweetGetSvcCaller extends RxAxiosCaller<
  IGetResponse["data"],
  IGetRequest,
  IGetResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.GET.GET, "GET", (raw) => raw.data);
  }
}

export const tweetGetSvcCaller = new TweetGetSvcCaller();
