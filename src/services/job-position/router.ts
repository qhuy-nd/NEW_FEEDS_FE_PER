const PREFIX_JOB_POSITION = "/job_position";

export const API_JOB_POSITION_ROUTERS = {
  GET: {
    JOB_POSITION_GET: `${PREFIX_JOB_POSITION}/action/get/{slug}`,
    JOB_POSITION_GETLIST: `${PREFIX_JOB_POSITION}/action/getlist`,
  },
};
