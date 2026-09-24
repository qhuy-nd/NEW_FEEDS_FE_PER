const PREFIX_TWEET_LIKE = "/tweet_like";

export const API_TWEET_LIKE_ROUTERS = {
  GET: {
    TWEET_LIKE_GET: `${PREFIX_TWEET_LIKE}/action/get/{slug}`,
    TWEET_LIKE_GETLIST: `${PREFIX_TWEET_LIKE}/action/getlist`,
  },
};
