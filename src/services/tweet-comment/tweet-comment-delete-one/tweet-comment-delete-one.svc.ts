import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_COMMENT_ROUTERS } from "../router";
import type { ITweetCommentDeleteOneRequest, ITweetCommentDeleteOneResponse } from "./tweet-comment-delete-one.type";

class TweetCommentDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetCommentDeleteOneResponse["data"],
  ITweetCommentDeleteOneRequest,
  ITweetCommentDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_COMMENT_ROUTERS.DELETE.TWEET_COMMENT_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetCommentDeleteOneSvcCaller = new TweetCommentDeleteOneSvcCaller();
