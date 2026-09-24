const PREFIX_POSTS = '/tweet'

export const API_POST_ROUTERS = {
  GET: {
    DETAIL: `${PREFIX_POSTS}/{id}`,
    LIST: `front/${PREFIX_POSTS}`,
  },
  POST: {
    CREATE: "/posts",
    LIKE: `${PREFIX_POSTS}/{id}/like`
  }
}
