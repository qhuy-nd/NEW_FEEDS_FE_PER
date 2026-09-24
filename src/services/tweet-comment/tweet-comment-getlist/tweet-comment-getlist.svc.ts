import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_COMMENT_ROUTERS } from "../router";
import type { ITweetCommentGetlistRequest, ITweetCommentGetlistResponse } from "./tweet-comment-getlist.type";

class TweetCommentGetlistSvcCaller extends RxAxiosCaller<
  ITweetCommentGetlistResponse["data"],
  ITweetCommentGetlistRequest,
  ITweetCommentGetlistResponse
> {
  constructor() {
    super(API_TWEET_COMMENT_ROUTERS.GET.TWEET_COMMENT_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetCommentGetlistSvcCaller = new TweetCommentGetlistSvcCaller();
