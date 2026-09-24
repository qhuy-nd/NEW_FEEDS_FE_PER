const PREFIX_GROUP_BAN = "/group_ban";

export const API_GROUP_BAN_ROUTERS = {
  GET: {
    GROUP_BAN_GET: `${PREFIX_GROUP_BAN}/action/get/{slug}`,
    GROUP_BAN_GETLIST: `${PREFIX_GROUP_BAN}/action/getlist`,
  },
};
