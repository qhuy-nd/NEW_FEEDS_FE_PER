import { RxAxiosCaller } from "../../api.svc";
import { API_TWEET_SOCIAL_VOTES_ROUTERS } from "../router";
import type { ITweetSocialVotesUpdateOneRequest, ITweetSocialVotesUpdateOneResponse } from "./tweet-social-votes-update-one.type";

class TweetSocialVotesUpdateOneSvcCaller extends RxAxiosCaller<
  ITweetSocialVotesUpdateOneResponse["data"],
  ITweetSocialVotesUpdateOneRequest,
  ITweetSocialVotesUpdateOneResponse
> {
  constructor() {
    super(API_TWEET_SOCIAL_VOTES_ROUTERS.PUT.TWEET_SOCIAL_VOTES_UPDATE_ONE, "PUT", (raw) => raw.data);
  }
}

export const tweetSocialVotesUpdateOneSvcCaller = new TweetSocialVotesUpdateOneSvcCaller();
