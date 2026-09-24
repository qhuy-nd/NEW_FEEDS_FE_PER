const PREFIX_GROUP = "/group";

export const API_GROUP_ROUTERS = {
  GET: {
    GET: `${PREFIX_GROUP}/action/get/{slug}`,
    GETLIST_JOINED: `${PREFIX_GROUP}/action/getlist/join`,
  },
  POST: {
    BAN: `${PREFIX_GROUP}/action/ban`,
    CREATE_ONE: `${PREFIX_GROUP}/action/create`,
    JOIN: `${PREFIX_GROUP}/action/join`,
    PIN: `${PREFIX_GROUP}/action/pin`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_GROUP}/action/update/{id}`,
  },
  DELETE: {
    UNPIN_GROUP: `${PREFIX_GROUP}/action/unpin/{social_group}`,
  },
};
