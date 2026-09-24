const PREFIX_COURSES = "/courses";

export const API_COURSES_ROUTERS = {
  GET: {
    GET: `${PREFIX_COURSES}/action/get/{slug}`,
    GETLIST: `${PREFIX_COURSES}/action/getlist`,
    GETLIST_JOINED: `${PREFIX_COURSES}/action/getlist/join`,
    MEMBERS: `${PREFIX_COURSES}/action/members`,
  },
  POST: {
    ADD_CART: `${PREFIX_COURSES}/action/add-cart`,
    CREATE_ONE: `${PREFIX_COURSES}/action/create`,
    JOIN: `${PREFIX_COURSES}/action/join`,
    PROGRESS: `${PREFIX_COURSES}/action/progress`,
    RATE: `${PREFIX_COURSES}/action/rate`,
  },
  PUT: {
    UPDATE_ONE: `${PREFIX_COURSES}/action/update/{id}`,
  },
  DELETE: {
    DELETE_ONE: `${PREFIX_COURSES}/action/delete/{id}`,
  },
};
