const PREFIX_GROUP_CATEGORY = "/group_category";

export const API_GROUP_CATEGORY_ROUTERS = {
  GET: {
    GROUP_CATEGORY_GET: `${PREFIX_GROUP_CATEGORY}/action/get/{slug}`,
    GROUP_CATEGORY_GETLIST: `${PREFIX_GROUP_CATEGORY}/action/getlist`,
  },
  POST: {
    GROUP_CATEGORY_CREATE_ONE: `${PREFIX_GROUP_CATEGORY}/action/create`,
  },
  PUT: {
    GROUP_CATEGORY_UPDATE_ONE: `${PREFIX_GROUP_CATEGORY}/action/update/{id}`,
  },
  DELETE: {
    GROUP_CATEGORY_DELETE_ONE: `${PREFIX_GROUP_CATEGORY}/action/delete/{id}`,
  },
};
