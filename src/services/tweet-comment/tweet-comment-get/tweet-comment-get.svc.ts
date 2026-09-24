import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_COMMENT_ROUTERS } from "../router";
import type { ITweetCommentGetRequest, ITweetCommentGetResponse } from "./tweet-comment-get.type";

class TweetCommentGetSvcCaller extends RxAxiosCaller<
  ITweetCommentGetResponse["data"],
  ITweetCommentGetRequest,
  ITweetCommentGetResponse
> {
  constructor() {
    super(API_TWEET_COMMENT_ROUTERS.GET.TWEET_COMMENT_GET, "GET", (raw) => raw.data);
  }
}

export const tweetCommentGetSvcCaller = new TweetCommentGetSvcCaller();
