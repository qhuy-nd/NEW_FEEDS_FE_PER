import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentGetRequest, IDiscussionCommentGetResponse } from "./discussion-comment-get.type";

class DiscussionCommentGetSvcCaller extends RxAxiosCaller<
  IDiscussionCommentGetResponse["data"],
  IDiscussionCommentGetRequest,
  IDiscussionCommentGetResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.GET.DISCUSSION_COMMENT_GET, "GET", (raw) => raw.data);
  }
}

export const discussionCommentGetSvcCaller = new DiscussionCommentGetSvcCaller();
