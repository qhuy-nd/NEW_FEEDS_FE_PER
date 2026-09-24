import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentCreateOneRequest, IDiscussionCommentCreateOneResponse } from "./discussion-comment-create-one.type";

class DiscussionCommentCreateOneSvcCaller extends RxAxiosCaller<
  IDiscussionCommentCreateOneResponse["data"],
  IDiscussionCommentCreateOneRequest,
  IDiscussionCommentCreateOneResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.POST.DISCUSSION_COMMENT_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const discussionCommentCreateOneSvcCaller = new DiscussionCommentCreateOneSvcCaller();
