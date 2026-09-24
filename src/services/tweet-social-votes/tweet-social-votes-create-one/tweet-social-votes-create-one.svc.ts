import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesCreateOneRequest, ITweetSocialVotesCreateOneResponse } from "./tweet-social-votes-create-one.type";

class TweetSocialVotesCreateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesCreateOneResponse["data"],
  ITweetSocialVotesCreateOneRequest,
  ITweetSocialVotesCreateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.POST.TWEET_SOCIAL_VOTES_CREATE_ONE, "POST", (raw) => raw.data);
  }
}

export const tweetSocialVotesCreateOneSvcCaller = new TweetSocialVotesCreateOneSvcCaller();
