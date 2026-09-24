import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentDeleteOneRequest, IDiscussionCommentDeleteOneResponse } from "./discussion-comment-delete-one.type";

class DiscussionCommentDeleteOneSvcCaller extends RxAxiosCaller<
  IDiscussionCommentDeleteOneResponse["data"],
  IDiscussionCommentDeleteOneRequest,
  IDiscussionCommentDeleteOneResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.DELETE.DISCUSSION_COMMENT_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const discussionCommentDeleteOneSvcCaller = new DiscussionCommentDeleteOneSvcCaller();
