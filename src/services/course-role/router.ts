const PREFIX_COURSE_ROLE = "/course_role";

export const API_COURSE_ROLE_ROUTERS = {
  GET: {
    COURSE_ROLE_GET: `${PREFIX_COURSE_ROLE}/action/get/{slug}`,
    COURSE_ROLE_GETLIST: `${PREFIX_COURSE_ROLE}/action/getlist`,
  },
  POST: {
    COURSE_ROLE_CREATE_ONE: `${PREFIX_COURSE_ROLE}/action/create`,
  },
  PUT: {
    COURSE_ROLE_UPDATE_ONE: `${PREFIX_COURSE_ROLE}/action/update/{id}`,
  },
  DELETE: {
    COURSE_ROLE_DELETE_ONE: `${PREFIX_COURSE_ROLE}/action/delete/{id}`,
  },
};
