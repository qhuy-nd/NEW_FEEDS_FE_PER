import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_COMMENT_ROUTERS } from "../router";
import type { ITweetCommentCreateOneRequest, ITweetCommentCreateOneResponse } from "./tweet-comment-create-one.type";

class TweetCommentCreateOneSvcCaller extends RxAxiosCaller<
  ITweetCommentCreateOneResponse["data"],
  ITweetCommentCreateOneRequest,
  ITweetCommentCreateOneResponse
> {
  constructor() {
    super(API_TWEET_COMMENT_ROUTERS.POST.TWEET_COMMENT_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetCommentCreateOneSvcCaller = new TweetCommentCreateOneSvcCaller();
