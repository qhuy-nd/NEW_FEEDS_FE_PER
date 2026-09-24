const PREFIX_ENTITY_LIKE = "/entity_like";

export const API_ENTITY_LIKE_ROUTERS = {
  GET: {
    ENTITY_LIKE_GET: `${PREFIX_ENTITY_LIKE}/action/get/{slug}`,
    ENTITY_LIKE_GETLIST: `${PREFIX_ENTITY_LIKE}/action/getlist`,
  },
  POST: {
    ENTITY_LIKE_LIKE: `${PREFIX_ENTITY_LIKE}/action/like`,
  },
};
