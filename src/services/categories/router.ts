const PREFIX_CATEGORIES = "/categories";

export const API_CATEGORIES_ROUTERS = {
  GET: {
    GET: `${PREFIX_CATEGORIES}/action/get/{slug}`,
    GETLIST: `${PREFIX_CATEGORIES}/action/getlist`,
  },
};
