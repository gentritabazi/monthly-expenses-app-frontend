import AdminLayout from "@/layouts/Admin";
import AppConfig from "@/config/app";
import StatsData from "./demo/stats";
import CategoriesOfExpensesData from "./demo/categories-of-expenses";

export default {
  name: "Dashboard",

  components: {
    AdminLayout,
  },

  data() {
    return {
      stats: {},
      categoriesOfExpenses: [],
    };
  },

  mounted() {
    this.getStats();
    this.getCategoriesOfExpensesData();
  },

  methods: {
    getStats() {
      if (AppConfig.DEMO_MODE) {
        this.stats = StatsData;
        return;
      }
    },

    getCategoriesOfExpensesData() {
      if (AppConfig.DEMO_MODE) {
        this.categoriesOfExpenses = CategoriesOfExpensesData;
        return;
      }
    },

    categoryProgressBarClass(number) {
      return `w-${number}`;
    },
  },
};
