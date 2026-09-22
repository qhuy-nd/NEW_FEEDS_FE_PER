const PREFIX_POSTS = '/posts'

export const API_POST_ROUTERS = {
  GET: {
    DETAIL: `${PREFIX_POSTS}/{id}`,
    LIST: PREFIX_POSTS
  },
  POST: {
    CREATE: "/posts",
    LIKE: `${PREFIX_POSTS}/{id}/like`
  }
}
