const PREFIX_TWEET_HIDDEN = "/tweet_hidden";

export const API_TWEET_HIDDEN_ROUTERS = {
  GET: {
    TWEET_HIDDEN_GET: `${PREFIX_TWEET_HIDDEN}/action/get/{slug}`,
    TWEET_HIDDEN_GETLIST: `${PREFIX_TWEET_HIDDEN}/action/getlist`,
  },
};
