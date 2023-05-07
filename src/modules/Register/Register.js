import GuestLayout from "@/layouts/Guest";
import Api from "@/utils/api";
import AppConfig from "@/config/app";

export default {
  name: "Register",

  data() {
    return {
      name: null,
      email: null,
      password: null,
    };
  },

  components: {
    GuestLayout,
  },

  methods: {
    register() {
      if (AppConfig.DEMO_MODE) {
        this.$router.push({ name: "dashboard" });
        return;
      }

      Api.post("/auth/register", { name: this.name, email: this.email, password: this.password });

      self.$router.go({ name: "login" });
    },
  },
};
