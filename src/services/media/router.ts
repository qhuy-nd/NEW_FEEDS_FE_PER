const PREFIX_MEDIA = "/media";

export const API_MEDIA_ROUTERS = {
  GET: {
    GET: `${PREFIX_MEDIA}/action/get/{slug}`,
  },
  POST: {
    CREATE_ONE: `${PREFIX_MEDIA}/action/create`,
  },
};
