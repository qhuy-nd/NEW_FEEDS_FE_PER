const PREFIX_GROUP_PIN = "/group_pin";

export const API_GROUP_PIN_ROUTERS = {
  GET: {
    GROUP_PIN_GET: `${PREFIX_GROUP_PIN}/action/get/{slug}`,
    GROUP_PIN_GETLIST: `${PREFIX_GROUP_PIN}/action/getlist`,
  },
};
