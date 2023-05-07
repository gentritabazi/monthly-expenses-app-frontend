import GuestLayout from "@/layouts/Guest";
import Api from "@/utils/api";

export default {
  name: "Login",

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
    login() {
      Api.post("/auth/register", { name: this.name, email: this.email, password: this.password });

      self.$router.go({ name: "admin.login" });
    },
  },
};
