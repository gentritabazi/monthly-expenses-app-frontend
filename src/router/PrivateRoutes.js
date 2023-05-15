// Import Modules
const dashboard = () => import("@/modules/Dashboard");
const expenses = () => import("@/modules/Expenses");
const categories = () => import("@/modules/Categories");

// Export
export default [
  // Dashboard
  {
    path: "/dashboard",
    component: dashboard,
    name: "dashboard",
    meta: {
      auth: true,
      breadCrumb: [{ name: "Dashboard", link: "dashboard" }],
    },
  },

  // Expenses
  {
    path: "/expenses",
    component: expenses,
    name: "expenses",
    meta: {
      auth: true,
      breadCrumb: [{ name: "Expenses", link: "expenses" }],
    },
  },

  // Categories
  {
    path: "/categories",
    component: categories,
    name: "categories",
    meta: {
      auth: true,
      breadCrumb: [{ name: "Categories", link: "categories" }],
    },
  },
];
