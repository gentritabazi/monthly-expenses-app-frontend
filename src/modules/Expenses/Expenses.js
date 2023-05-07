import AdminLayout from "@/layouts/Admin";
import ExpensesData from "./demo/expenses";
import Api from "@/utils/api";
import AppConfig from "@/config/app";

export default {
  name: "Expenses",

  components: {
    AdminLayout,
  },

  data() {
    return {
      expenses: {},
    };
  },

  mounted() {
    this.getExpenses();
  },

  methods: {
    async getExpenses() {
      if (AppConfig.DEMO_MODE) {
        this.expenses = ExpensesData;
        return;
      }

      const response = await Api.get("/expenses");
      this.expenses = response.data;
    },
  },
};
