const PREFIX_TWEET_SAVED = "/tweet_saved";

export const API_TWEET_SAVED_ROUTERS = {
  GET: {
    TWEET_SAVED_GET: `${PREFIX_TWEET_SAVED}/action/get/{slug}`,
    TWEET_SAVED_GETLIST: `${PREFIX_TWEET_SAVED}/action/getlist`,
  },
};
