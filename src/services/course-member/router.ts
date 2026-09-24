const PREFIX_COURSE_MEMBER = "/course_member";

export const API_COURSE_MEMBER_ROUTERS = {
  GET: {
    COURSE_MEMBER_GET: `${PREFIX_COURSE_MEMBER}/action/get/{slug}`,
    COURSE_MEMBER_GETLIST: `${PREFIX_COURSE_MEMBER}/action/getlist`,
  },
  POST: {
    COURSE_MEMBER_CREATE_ONE: `${PREFIX_COURSE_MEMBER}/action/create`,
  },
  PUT: {
    COURSE_MEMBER_UPDATE_ONE: `${PREFIX_COURSE_MEMBER}/action/update/{id}`,
  },
  PATCH: {
    COURSE_MEMBER_APPROVE: `${PREFIX_COURSE_MEMBER}/action/approve/{id}`,
  },
  DELETE: {
    COURSE_MEMBER_DELETE_ONE: `${PREFIX_COURSE_MEMBER}/action/delete/{id}`,
  },
};
