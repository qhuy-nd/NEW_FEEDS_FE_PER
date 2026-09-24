const PREFIX_QUESTIONS = "/questions";

export const API_QUESTIONS_ROUTERS = {
  GET: {
    GET: `${PREFIX_QUESTIONS}/action/get/{slug}`,
    GETLIST: `${PREFIX_QUESTIONS}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_QUESTIONS}/action/create`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_QUESTIONS}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_QUESTIONS}/action/delete/{id}`,
  },
};
