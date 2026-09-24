import { RxAxiosCaller } from "../../api.svc";
import { API_USER_VOTE_RESULT_ROUTERS } from "../router";
import type { IUserVoteResultGetRequest, IUserVoteResultGetResponse } from "./user-vote-result-get.type";

class UserVoteResultGetSvcCaller extends RxAxiosCaller<
  IUserVoteResultGetResponse["data"],
  IUserVoteResultGetRequest,
  IUserVoteResultGetResponse
> {
  constructor() {
    super(API_USER_VOTE_RESULT_ROUTERS.GET.USER_VOTE_RESULT_GET, "GET", (raw) => raw.data);
  }
}

export const userVoteResultGetSvcCaller = new UserVoteResultGetSvcCaller();
