const PREFIX_LEARNING_PATH = "/learning_path";

export const API_LEARNING_PATH_ROUTERS = {
  GET: {
    LEARNING_PATH_GET: `${PREFIX_LEARNING_PATH}/action/get/{slug}`,
    LEARNING_PATH_GETLIST: `${PREFIX_LEARNING_PATH}/action/getlist`,
  },
};
