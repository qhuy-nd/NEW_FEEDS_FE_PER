const PREFIX_USER_FOLLOW = "/user_follow";

export const API_USER_FOLLOW_ROUTERS = {
  GET: {
    USER_FOLLOW_GET: `${PREFIX_USER_FOLLOW}/action/get/{slug}`,
    USER_FOLLOW_GETLIST: `${PREFIX_USER_FOLLOW}/action/getlist`,
  },
};
