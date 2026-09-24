const PREFIX_GROUP_MENU_ITEM = "/group_menu_item";

export const API_GROUP_MENU_ITEM_ROUTERS = {
  GET: {
    GROUP_MENU_ITEM_GET: `${PREFIX_GROUP_MENU_ITEM}/action/get/{slug}`,
    GROUP_MENU_ITEM_GETLIST: `${PREFIX_GROUP_MENU_ITEM}/action/getlist`,
  },
  POST: {
    GROUP_MENU_ITEM_CREATE_ONE: `${PREFIX_GROUP_MENU_ITEM}/action/create`,
  },
  PUT: {
    GROUP_MENU_ITEM_UPDATE_ONE: `${PREFIX_GROUP_MENU_ITEM}/action/update/{id}`,
  },
  DELETE: {
    GROUP_MENU_ITEM_DELETE_ONE: `${PREFIX_GROUP_MENU_ITEM}/action/delete/{id}`,
  },
};
