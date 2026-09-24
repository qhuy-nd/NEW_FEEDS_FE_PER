const PREFIX_COURSE_TEAM = "/course_team";

export const API_COURSE_TEAM_ROUTERS = {
  GET: {
    COURSE_TEAM_GET: `${PREFIX_COURSE_TEAM}/action/get/{slug}`,
    COURSE_TEAM_GETLIST: `${PREFIX_COURSE_TEAM}/action/getlist`,
  },
};
