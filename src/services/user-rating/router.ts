const PREFIX_USER_RATING = "/user_rating";

export const API_USER_RATING_ROUTERS = {
  GET: {
    USER_RATING_GET: `${PREFIX_USER_RATING}/action/get/{slug}`,
    USER_RATING_GETLIST: `${PREFIX_USER_RATING}/action/getlist`,
  },
};
