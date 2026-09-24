const PREFIX_CHAPTERS = "/chapters";

export const API_CHAPTERS_ROUTERS = {
  GET: {
    GET: `${PREFIX_CHAPTERS}/action/get/{slug}`,
    GETLIST: `${PREFIX_CHAPTERS}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_CHAPTERS}/action/create`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_CHAPTERS}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_CHAPTERS}/action/delete/{id}`,
  },
};
