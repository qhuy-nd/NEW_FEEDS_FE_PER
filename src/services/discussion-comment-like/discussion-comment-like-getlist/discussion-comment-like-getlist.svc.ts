import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_LIKE_ROUTERS } from "../router";
import type { IDiscussionCommentLikeGetlistRequest, IDiscussionCommentLikeGetlistResponse } from "./discussion-comment-like-getlist.type";

class DiscussionCommentLikeGetlistSvcCaller extends RxAxiosCaller<
  IDiscussionCommentLikeGetlistResponse["data"],
  IDiscussionCommentLikeGetlistRequest,
  IDiscussionCommentLikeGetlistResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_LIKE_ROUTERS.GET.DISCUSSION_COMMENT_LIKE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const discussionCommentLikeGetlistSvcCaller = new DiscussionCommentLikeGetlistSvcCaller();
