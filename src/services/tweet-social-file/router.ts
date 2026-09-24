const PREFIX_TWEET_SOCIAL_FILE = "/tweet_social_file";

export const API_TWEET_SOCIAL_FILE_ROUTERS = {
  GET: {
    TWEET_SOCIAL_FILE_GET: `${PREFIX_TWEET_SOCIAL_FILE}/action/get/{slug}`,
    TWEET_SOCIAL_FILE_GETLIST: `${PREFIX_TWEET_SOCIAL_FILE}/action/getlist`,
  },
  POST: {
    TWEET_SOCIAL_FILE_CREATE_ONE: `${PREFIX_TWEET_SOCIAL_FILE}/action/create`,
  },
  PUT: {
    TWEET_SOCIAL_FILE_UPDATE_ONE: `${PREFIX_TWEET_SOCIAL_FILE}/action/update/{id}`,
  },
  DELETE: {
    TWEET_SOCIAL_FILE_DELETE_ONE: `${PREFIX_TWEET_SOCIAL_FILE}/action/delete/{id}`,
  },
};
