import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesVoteRequest, ITweetSocialVotesVoteResponse } from "./tweet-social-votes-vote.type";

class TweetSocialVotesVoteSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesVoteResponse["data"],
  ITweetSocialVotesVoteRequest,
  ITweetSocialVotesVoteResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.POST.TWEET_SOCIAL_VOTES_VOTE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialVotesVoteSvcCaller = new TweetSocialVotesVoteSvcCaller();
