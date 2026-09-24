const PREFIX_USER_REPORTS = "/user_reports";

export const API_USER_REPORTS_ROUTERS = {
  GET: {
    USER_REPORTS_GET: `${PREFIX_USER_REPORTS}/action/get/{slug}`,
    USER_REPORTS_GETLIST: `${PREFIX_USER_REPORTS}/action/getlist`,
  },
  POST: {
    USER_REPORTS_CREATE_ONE: `${PREFIX_USER_REPORTS}/action/create`,
  },
  PUT: {
    USER_REPORTS_UPDATE_ONE: `${PREFIX_USER_REPORTS}/action/update/{id}`,
  },
  DELETE: {
    USER_REPORTS_DELETE_ONE: `${PREFIX_USER_REPORTS}/action/delete/{id}`,
  },
};
