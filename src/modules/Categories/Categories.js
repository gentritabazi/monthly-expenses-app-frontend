import AdminLayout from "@/layouts/Admin";
import CategoriesData from "./demo/categories";
import Api from "@/utils/api";
import AppConfig from "@/config/app";

export default {
  name: "Categories",

  components: {
    AdminLayout,
  },

  data() {
    return {
      categories: {},
    };
  },

  mounted() {
    this.getCategories();
  },

  methods: {
    async getCategories() {
      if (AppConfig.DEMO_MODE) {
        this.categories = CategoriesData;
        return;
      }

      const response = await Api.get("/categories");
      this.categories = response.data;
    },
  },
};
