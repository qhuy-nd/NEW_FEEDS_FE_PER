const PREFIX_DISCUSSION_LIKE = "/discussion_like";

export const API_DISCUSSION_LIKE_ROUTERS = {
  GET: {
    DISCUSSION_LIKE_GET: `${PREFIX_DISCUSSION_LIKE}/action/get/{slug}`,
    DISCUSSION_LIKE_GETLIST: `${PREFIX_DISCUSSION_LIKE}/action/getlist`,
  },
};
