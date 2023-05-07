// Import
import { createWebHistory, createRouter } from "vue-router";
import PublicRoutes from "./PublicRoutes.js";
import PrivateRoutes from "./PrivateRoutes.js";
import Store from "@/store";
import AppConfig from "@/config/app";

// Start vue router
const router = createRouter({
  history: createWebHistory(),
  routes: [...PublicRoutes, ...PrivateRoutes],
});

// Middlewares
router.beforeEach((to, from, next) => {
  // Redirect to route
  const redirectToRoute = function (name) {
    if (name === from.name) {
      next();
      return;
    }

    next({ name: name });
  };

  // Get logged user
  const loggedUser = Store.getters.getLoggedUser;

  // Auth
  if (to.meta.auth) {
    if (loggedUser || AppConfig.DEMO_MODE) {
      return next();
    }

    return redirectToRoute("login");
  }

  // Guest
  if (to.meta.guest) {
    if (!loggedUser || AppConfig.DEMO_MODE) {
      return next();
    }

    return redirectToRoute("dashboard");
  }

  next();
});

// Export
export default router;
