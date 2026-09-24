import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_COMMENT_ROUTERS } from "../router";
import type { IDiscussionCommentUpdateOneRequest, IDiscussionCommentUpdateOneResponse } from "./discussion-comment-update-one.type";

class DiscussionCommentUpdateOneSvcCaller extends RxAxiosCaller<
  IDiscussionCommentUpdateOneResponse["data"],
  IDiscussionCommentUpdateOneRequest,
  IDiscussionCommentUpdateOneResponse
> {
  constructor() {
    super(API_DISCUSSION_COMMENT_ROUTERS.PUT.DISCUSSION_COMMENT_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const discussionCommentUpdateOneSvcCaller = new DiscussionCommentUpdateOneSvcCaller();
