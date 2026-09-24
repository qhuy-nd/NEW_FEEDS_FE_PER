import { RxAxiosCaller } from "../../api.svc";
import { API_USER_VOTE_RESULT_ROUTERS } from "../router";
import type { IUserVoteResultGetlistRequest, IUserVoteResultGetlistResponse } from "./user-vote-result-getlist.type";

class UserVoteResultGetlistSvcCaller extends RxAxiosCaller<
  IUserVoteResultGetlistResponse["data"],
  IUserVoteResultGetlistRequest,
  IUserVoteResultGetlistResponse
> {
  constructor() {
    super(API_USER_VOTE_RESULT_ROUTERS.GET.USER_VOTE_RESULT_GETLIST, "GET", (raw) => raw.data);
  }
}

export const userVoteResultGetlistSvcCaller = new UserVoteResultGetlistSvcCaller();
