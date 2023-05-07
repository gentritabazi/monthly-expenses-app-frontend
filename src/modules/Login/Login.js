import GuestLayout from "@/layouts/Guest";
import Api from "@/utils/api";

export default {
  name: "Login",

  data() {
    return {
      email: null,
      password: null,
    };
  },

  components: {
    GuestLayout,
  },

  methods: {
    async login() {
      const response = await Api.post("/auth/login", { email: this.email, password: this.password });

      this.$store.commit("LOGGED_USER", response.data);

      this.$router.go({ name: "admin.dashboard" });
    },
  },
};
