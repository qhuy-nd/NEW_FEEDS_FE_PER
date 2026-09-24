import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_LIKE_ROUTERS } from "../router";
import type { IDiscussionLikeGetlistRequest, IDiscussionLikeGetlistResponse } from "./discussion-like-getlist.type";

class DiscussionLikeGetlistSvcCaller extends RxAxiosCaller<
  IDiscussionLikeGetlistResponse["data"],
  IDiscussionLikeGetlistRequest,
  IDiscussionLikeGetlistResponse
> {
  constructor() {
    super(API_DISCUSSION_LIKE_ROUTERS.GET.DISCUSSION_LIKE_GETLIST, "GET", (raw) => raw.data);
  }
}

export const discussionLikeGetlistSvcCaller = new DiscussionLikeGetlistSvcCaller();
