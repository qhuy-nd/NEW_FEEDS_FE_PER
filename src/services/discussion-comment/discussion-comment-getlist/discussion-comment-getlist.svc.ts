import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentGetlistRequest, IDiscussionCommentGetlistResponse } from "./discussion-comment-getlist.type";

class DiscussionCommentGetlistSvcCaller extends RxAxiosCaller<
  IDiscussionCommentGetlistResponse["data"],
  IDiscussionCommentGetlistRequest,
  IDiscussionCommentGetlistResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.GET.DISCUSSION_COMMENT_GETLIST, "GET", (raw) => raw.data);
  }
}

export const discussionCommentGetlistSvcCaller = new DiscussionCommentGetlistSvcCaller();
