import { RxAxiosCaller } from "../../api.svc";
import { API_DISCUSSION_LIKE_ROUTERS } from "../router";
import type { IDiscussionLikeGetRequest, IDiscussionLikeGetResponse } from "./discussion-like-get.type";

class DiscussionLikeGetSvcCaller extends RxAxiosCaller<
  IDiscussionLikeGetResponse["data"],
  IDiscussionLikeGetRequest,
  IDiscussionLikeGetResponse
> {
  constructor() {
    super(API_DISCUSSION_LIKE_ROUTERS.GET.DISCUSSION_LIKE_GET, "GET", (raw) => raw.data);
  }
}

export const discussionLikeGetSvcCaller = new DiscussionLikeGetSvcCaller();
