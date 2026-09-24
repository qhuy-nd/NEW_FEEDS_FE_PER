const PREFIX_DISCUSSIONS = "/discussions";

export const API_DISCUSSIONS_ROUTERS = {
  GET: {
    GET: `${PREFIX_DISCUSSIONS}/action/get/{slug}`,
    GETLIST: `${PREFIX_DISCUSSIONS}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_DISCUSSIONS}/action/create`,
    LIKE: `${PREFIX_DISCUSSIONS}/action/like`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_DISCUSSIONS}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_DISCUSSIONS}/action/delete/{id}`,
  },
};
