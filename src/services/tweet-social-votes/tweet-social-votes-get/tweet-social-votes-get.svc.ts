import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesGetRequest, ITweetSocialVotesGetResponse } from "./tweet-social-votes-get.type";

class TweetSocialVotesGetSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesGetResponse["data"],
  ITweetSocialVotesGetRequest,
  ITweetSocialVotesGetResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.GET.TWEET_SOCIAL_VOTES_GET, "GET", (raw) => raw.data);
  }
}

export const tweetSocialVotesGetSvcCaller = new TweetSocialVotesGetSvcCaller();
