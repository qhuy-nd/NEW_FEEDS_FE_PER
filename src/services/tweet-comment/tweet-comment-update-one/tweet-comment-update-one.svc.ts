import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_COMMENT_ROUTERS } from "../router";
import type { ITweetCommentUpdateOneRequest, ITweetCommentUpdateOneResponse } from "./tweet-comment-update-one.type";

class TweetCommentUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetCommentUpdateOneResponse["data"],
  ITweetCommentUpdateOneRequest,
  ITweetCommentUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_COMMENT_ROUTERS.PUT.TWEET_COMMENT_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetCommentUpdateOneSvcCaller = new TweetCommentUpdateOneSvcCaller();
