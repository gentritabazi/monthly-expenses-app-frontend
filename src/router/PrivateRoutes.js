// Import Modules
const dashboard = () => import("@/modules/Dashboard");
const expenses = () => import("@/modules/Expenses");

// Export
export default [
  // Dashboard
  {
    path: "/admin/dashboard",
    component: dashboard,
    name: "admin.dashboard",
    meta: {
      // auth: true,
      breadCrumb: [{ name: "Dashboard", link: "admin.dashboard" }],
    },
  },

  // Users
  {
    path: "/admin/expenses",
    component: expenses,
    name: "admin.expenses",
    meta: {
      // auth: true,
      breadCrumb: [{ name: "Expenses", link: "admin.expenses" }],
    },
  },
];
