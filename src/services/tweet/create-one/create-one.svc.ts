import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_ROUTERS } from "../router";
import type { ICreateOneRequest, ICreateOneResponse } from "./create-one.type";

class TweetCreateOneSvcCaller extends RxAxiosCaller<
  ICreateOneResponse["data"],
  ICreateOneRequest,
  ICreateOneResponse
> {
  constructor() {
    super(API_TWEET_ROUTERS.POST.CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetCreateOneSvcCaller = new TweetCreateOneSvcCaller();
