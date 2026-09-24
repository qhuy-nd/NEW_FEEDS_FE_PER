import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_LIKE_ROUTERS } from "../router";
import type { IDiscussionCommentLikeGetRequest, IDiscussionCommentLikeGetResponse } from "./discussion-comment-like-get.type";

class DiscussionCommentLikeGetSvcCaller extends RxAxiosCaller<
  IDiscussionCommentLikeGetResponse["data"],
  IDiscussionCommentLikeGetRequest,
  IDiscussionCommentLikeGetResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_LIKE_ROUTERS.GET.DISCUSSION_COMMENT_LIKE_GET, "GET", (raw) => raw.data);
  }
}

export const discussionCommentLikeGetSvcCaller = new DiscussionCommentLikeGetSvcCaller();
