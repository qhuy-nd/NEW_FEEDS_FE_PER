import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesGetlistRequest, ITweetSocialVotesGetlistResponse } from "./tweet-social-votes-getlist.type";

class TweetSocialVotesGetlistSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesGetlistResponse["data"],
  ITweetSocialVotesGetlistRequest,
  ITweetSocialVotesGetlistResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.GET.TWEET_SOCIAL_VOTES_GETLIST, "GET", (raw) => raw.data);
  }
}

export const tweetSocialVotesGetlistSvcCaller = new TweetSocialVotesGetlistSvcCaller();
