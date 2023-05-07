// Import Modules
const login = () => import("@/modules/Login");
const register = () => import("@/modules/Register");

// Export
export default [
  // Home
  {
    path: "/",
    redirect: "/admin/dashboard",
  },

  // Login
  {
    path: "/admin/login",
    component: login,
    name: "admin.login",
    meta: { guest: true },
  },

  // Register
  {
    path: "/admin/register",
    component: register,
    name: "admin.register",
    meta: { guest: true },
  },
];
