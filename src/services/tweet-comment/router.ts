const PREFIX_TWEET_COMMENT = "/tweet_comment";

export const API_TWEET_COMMENT_ROUTERS = {
  GET: {
    TWEET_COMMENT_GET: `${PREFIX_TWEET_COMMENT}/action/get/{slug}`,
    TWEET_COMMENT_GETLIST: `${PREFIX_TWEET_COMMENT}/action/getlist`,
  },
  POST: {
    TWEET_COMMENT_CREATE_ONE: `${PREFIX_TWEET_COMMENT}/action/create`,
  },
  PUT: {
    TWEET_COMMENT_UPDATE_ONE: `${PREFIX_TWEET_COMMENT}/action/update/{id}`,
  },
  DELETE: {
    TWEET_COMMENT_DELETE_ONE: `${PREFIX_TWEET_COMMENT}/action/delete/{id}`,
  },
};
