const PREFIX_TWEET_PIN = "/tweet_pin";

export const API_TWEET_PIN_ROUTERS = {
  GET: {
    TWEET_PIN_GET: `${PREFIX_TWEET_PIN}/action/get/{slug}`,
    TWEET_PIN_GETLIST: `${PREFIX_TWEET_PIN}/action/getlist`,
  },
};
