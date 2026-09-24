const PREFIX_TWEET_SOCIAL_NEWS = "/tweet_social_news";

export const API_TWEET_SOCIAL_NEWS_ROUTERS = {
  GET: {
    TWEET_SOCIAL_NEWS_GET: `${PREFIX_TWEET_SOCIAL_NEWS}/action/get/{slug}`,
    TWEET_SOCIAL_NEWS_GETLIST: `${PREFIX_TWEET_SOCIAL_NEWS}/action/getlist`,
  },
  POST: {
    TWEET_SOCIAL_NEWS_CREATE_ONE: `${PREFIX_TWEET_SOCIAL_NEWS}/action/create`,
  },
  PUT: {
    TWEET_SOCIAL_NEWS_UPDATE_ONE: `${PREFIX_TWEET_SOCIAL_NEWS}/action/update/{id}`,
  },
  DELETE: {
    TWEET_SOCIAL_NEWS_DELETE_ONE: `${PREFIX_TWEET_SOCIAL_NEWS}/action/delete/{id}`,
  },
};
