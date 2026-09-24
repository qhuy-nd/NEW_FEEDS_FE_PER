const PREFIX_GROUP_MEMBER = "/group_member";

export const API_GROUP_MEMBER_ROUTERS = {
  GET: {
    GROUP_MEMBER_GET: `${PREFIX_GROUP_MEMBER}/action/get/{slug}`,
    GROUP_MEMBER_GETLIST: `${PREFIX_GROUP_MEMBER}/action/getlist`,
  },
  POST: {
    GROUP_MEMBER_CREATE_ONE: `${PREFIX_GROUP_MEMBER}/action/create`,
  },
  PUT: {
    GROUP_MEMBER_UPDATE_ONE: `${PREFIX_GROUP_MEMBER}/action/update/{id}`,
  },
  DELETE: {
    GROUP_MEMBER_DELETE_ONE: `${PREFIX_GROUP_MEMBER}/action/delete/{id}`,
  },
};
