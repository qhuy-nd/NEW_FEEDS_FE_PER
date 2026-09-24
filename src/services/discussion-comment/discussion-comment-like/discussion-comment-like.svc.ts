import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentLikeRequest, IDiscussionCommentLikeResponse } from "./discussion-comment-like.type";

class DiscussionCommentLikeSvcCaller extends RxAxiosCaller<
  IDiscussionCommentLikeResponse["data"],
  IDiscussionCommentLikeRequest,
  IDiscussionCommentLikeResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.POST.DISCUSSION_COMMENT_LIKE, "POST", (raw) => raw.data);
  }
}

export const discussionCommentLikeSvcCaller = new DiscussionCommentLikeSvcCaller();
