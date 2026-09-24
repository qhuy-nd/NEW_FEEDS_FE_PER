const PREFIX_USER_VOTE_RESULT = "/user_vote_result";

export const API_USER_VOTE_RESULT_ROUTERS = {
  GET: {
    USER_VOTE_RESULT_GET: `${PREFIX_USER_VOTE_RESULT}/action/get/{slug}`,
    USER_VOTE_RESULT_GETLIST: `${PREFIX_USER_VOTE_RESULT}/action/getlist`,
  },
};
