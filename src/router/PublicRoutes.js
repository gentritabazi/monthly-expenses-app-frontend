// Import Modules
const login = () => import("@/modules/Login");
const register = () => import("@/modules/Register");

// Export
export default [
  // Home
  {
    path: "/",
    redirect: "/dashboard",
  },

  // Login
  {
    path: "/login",
    component: login,
    name: "login",
    meta: { guest: true },
  },

  // Register
  {
    path: "/register",
    component: register,
    name: "register",
    meta: { guest: true },
  },
];
