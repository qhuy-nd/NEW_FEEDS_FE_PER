const PREFIX_LESSONS = "/lessons";

export const API_LESSONS_ROUTERS = {
  GET: {
    GET: `${PREFIX_LESSONS}/action/get/{slug}`,
    GETLIST: `${PREFIX_LESSONS}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_LESSONS}/action/create`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_LESSONS}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_LESSONS}/action/delete/{id}`,
  },
};
