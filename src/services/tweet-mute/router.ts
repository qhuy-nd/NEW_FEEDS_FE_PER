const PREFIX_TWEET_MUTE = "/tweet_mute";

export const API_TWEET_MUTE_ROUTERS = {
  GET: {
    TWEET_MUTE_GET: `${PREFIX_TWEET_MUTE}/action/get/{slug}`,
    TWEET_MUTE_GETLIST: `${PREFIX_TWEET_MUTE}/action/getlist`,
  },
};
