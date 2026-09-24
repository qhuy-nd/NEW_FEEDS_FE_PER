import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesDeleteOneRequest, ITweetSocialVotesDeleteOneResponse } from "./tweet-social-votes-delete-one.type";

class TweetSocialVotesDeleteOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesDeleteOneResponse["data"],
  ITweetSocialVotesDeleteOneRequest,
  ITweetSocialVotesDeleteOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.DELETE.TWEET_SOCIAL_VOTES_DELETE_ONE, "DELETE", (raw) => raw.data);
  }
}

export const tweetSocialVotesDeleteOneSvcCaller = new TweetSocialVotesDeleteOneSvcCaller();
