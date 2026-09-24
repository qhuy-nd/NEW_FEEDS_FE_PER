const PREFIX_COURSE_CART = "/course_cart";

export const API_COURSE_CART_ROUTERS = {
  GET: {
    COURSE_CART_GET: `${PREFIX_COURSE_CART}/action/get/{slug}`,
    COURSE_CART_GETLIST: `${PREFIX_COURSE_CART}/action/getlist`,
  },
};
