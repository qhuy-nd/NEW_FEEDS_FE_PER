const PREFIX_TWEET = "/tweet";

export const API_TWEET_ROUTERS = {
  GET: {
    GET: `${PREFIX_TWEET}/action/get/{slug}`,
    GETLIST: `${PREFIX_TWEET}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_TWEET}/action/create`,
    HIDE: `${PREFIX_TWEET}/action/hide`,
    LIKE: `${PREFIX_TWEET}/action/like`,
    MUTE: `${PREFIX_TWEET}/action/mute`,
    PIN: `${PREFIX_TWEET}/action/pin`,
    SAVE: `${PREFIX_TWEET}/action/save`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_TWEET}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_TWEET}/action/delete/{id}`,
    UNLIKE: `${PREFIX_TWEET}/action/unlike/{tweet}`,
    UNPIN: `${PREFIX_TWEET}/action/unpin/{tweet}`,
    UNSAVE: `${PREFIX_TWEET}/action/unsave/{tweet_id}`,
  },
};
