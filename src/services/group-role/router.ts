const PREFIX_GROUP_ROLE = "/group_role";

export const API_GROUP_ROLE_ROUTERS = {
  GET: {
    GROUP_ROLE_GET: `${PREFIX_GROUP_ROLE}/action/get/{slug}`,
    GROUP_ROLE_GETLIST: `${PREFIX_GROUP_ROLE}/action/getlist`,
  },
  POST: {
    GROUP_ROLE_CREATE_ONE: `${PREFIX_GROUP_ROLE}/action/create`,
  },
  PUT: {
    GROUP_ROLE_UPDATE_ONE: `${PREFIX_GROUP_ROLE}/action/update/{id}`,
  },
  DELETE: {
    GROUP_ROLE_DELETE_ONE: `${PREFIX_GROUP_ROLE}/action/delete/{id}`,
  },
};
