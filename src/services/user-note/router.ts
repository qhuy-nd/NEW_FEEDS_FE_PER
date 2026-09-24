const PREFIX_USER_NOTE = "/user_note";

export const API_USER_NOTE_ROUTERS = {
  GET: {
    USER_NOTE_GET: `${PREFIX_USER_NOTE}/action/get/{slug}`,
    USER_NOTE_GETLIST: `${PREFIX_USER_NOTE}/action/getlist`,
  },
  POST: {
    USER_NOTE_CREATE_ONE: `${PREFIX_USER_NOTE}/action/create`,
  },
  PUT: {
    USER_NOTE_UPDATE_ONE: `${PREFIX_USER_NOTE}/action/update/{id}`,
  },
  DELETE: {
    USER_NOTE_DELETE_ONE: `${PREFIX_USER_NOTE}/action/delete/{id}`,
  },
};
