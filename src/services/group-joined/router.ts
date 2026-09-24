const PREFIX_GROUP_JOINED = "/group_joined";

export const API_GROUP_JOINED_ROUTERS = {
  GET: {
    GROUP_JOINED_GET: `${PREFIX_GROUP_JOINED}/action/get/{slug}`,
    GROUP_JOINED_GETLIST: `${PREFIX_GROUP_JOINED}/action/getlist`,
  },
};
