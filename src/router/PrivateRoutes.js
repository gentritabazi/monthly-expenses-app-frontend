// Import Modules
const dashboard = () => import("@/modules/Dashboard");
const expenses = () => import("@/modules/Expenses");

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

  // Users
  {
    path: "/expenses",
    component: expenses,
    name: "expenses",
    meta: {
      auth: true,
      breadCrumb: [{ name: "Expenses", link: "expenses" }],
    },
  },
];
