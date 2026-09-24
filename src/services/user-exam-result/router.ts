const PREFIX_USER_EXAM_RESULT = "/user_exam_result";

export const API_USER_EXAM_RESULT_ROUTERS = {
  GET: {
    USER_EXAM_RESULT_GET: `${PREFIX_USER_EXAM_RESULT}/action/get/{slug}`,
    USER_EXAM_RESULT_GETLIST: `${PREFIX_USER_EXAM_RESULT}/action/getlist`,
  },
};
