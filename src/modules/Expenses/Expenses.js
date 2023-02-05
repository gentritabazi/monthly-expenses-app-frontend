import AdminLayout from "@/layouts/Admin";
import expenses from "./data/expenses";

export default {
  name: "Expenses",

  components: {
    AdminLayout,
  },

  data() {
    return {
      expenses,
    };
  },
};
