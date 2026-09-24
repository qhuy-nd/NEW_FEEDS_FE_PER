const PREFIX_EXAMS = "/exams";

export const API_EXAMS_ROUTERS = {
  GET: {
    GET: `${PREFIX_EXAMS}/action/get/{slug}`,
    GETLIST: `${PREFIX_EXAMS}/action/getlist`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_EXAMS}/action/create`,
    SUBMIT: `${PREFIX_EXAMS}/action/submit`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_EXAMS}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_EXAMS}/action/delete/{id}`,
  },
};
