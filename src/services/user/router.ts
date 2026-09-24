const PREFIX_USER = "/user";

export const API_USER_ROUTERS = {
  GET: {
    GET: `${PREFIX_USER}/action/get/{slug}`,
    GETLIST: `${PREFIX_USER}/action/getlist`,
  },
  POST: {
    FOLLOW: `${PREFIX_USER}/action/follow`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_USER}/action/update/{id}`,
  },
};
