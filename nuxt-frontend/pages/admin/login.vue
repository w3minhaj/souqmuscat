<template>
  <client-only>
    <div style="display: grid; place-content: center; min-height: 100vh">
      <div class="login-container">
        <h4 style="padding: 10px"><span>Welcome to </span></h4>
        <logo
          style="width: 70%; margin: auto; display: block; margin-bottom: 20px"
        />
        <form @submit.prevent="submit">
          <vs-input
            v-model="email"
            label-placeholder="Email"
            class="block"
            style="padding: 12px 10px"
          >
            <template #icon> @ </template>
          </vs-input>
          <vs-input
            type="password"
            v-model="password"
            label-placeholder="Password"
            class="block"
            style="padding: 12px 10px"
          >
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: #2c3e50; transform: ; -ms-filter: "
              >
                <path
                  d="M12,2C9.243,2,7,4.243,7,7v3H6c-1.104,0-2,0.896-2,2v8c0,1.104,0.896,2,2,2h2h3h2h2h3c1.104,0,2-0.896,2-2v-8 c0-1.104-0.896-2-2-2h-1V7C17,4.243,14.757,2,12,2z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v3H9V7z M13,17.723V20h-2v-2.277 c-0.727-0.422-1.169-1.278-0.939-2.224c0.176-0.72,0.78-1.302,1.506-1.453C12.861,13.774,14,14.753,14,16 C14,16.739,13.596,17.377,13,17.723z"
                ></path>
              </svg>
            </template>
          </vs-input>
          <div style="padding: 8px 10px">
            <vs-button
              type="submit"
              role="button"
              primary
              :loading="loginLoading"
              block
              relief
              style="margin: 0; color: #d59c04; font-weight: bold"
            >
              Log In
            </vs-button>
          </div>
        </form>
      </div>
    </div>
  </client-only>
</template>

<script>
import logo from './logo.vue';
export default {
  components: { logo },
  data() {
    return {
      email: "",
      password: "",
      loginLoading: false
    };
  },
  methods: {
    submit: async function () {
      try {
        this.loginLoading = true
        const res = await this.$axios.post(
          "/api/users/login",
          { email: this.email, password: this.password },
          { headers: { "Content-Type": "application/json" } }
        );
        if (res.status === 200) {
          this.$store.commit("addUser", res.data);
          this.$router.push("/admin/orders");
        } else {
          this.$router.go();
        }
      } catch (e) {
        if (e.response.status === 401) {
          this.email = "";
          this.password = "";
          this.$store.commit("removeUser");
          // this.$router.go()
          this.$router.push("/admin/login?m=inc");
        }
        this.loginLoading = false
      }
    },
    openNotification() {
      const noti = this.$vs.notification({
        icon:
          '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill:#fdfdfd;transform:;-ms-filter:"><path d="M11 7H13V14H11zM11 15H13V17H11z"></path><path d="M21.707,7.293l-5-5C16.52,2.105,16.266,2,16,2H8C7.734,2,7.48,2.105,7.293,2.293l-5,5C2.105,7.48,2,7.734,2,8v8 c0,0.266,0.105,0.52,0.293,0.707l5,5C7.48,21.895,7.734,22,8,22h8c0.266,0,0.52-0.105,0.707-0.293l5-5 C21.895,16.52,22,16.266,22,16V8C22,7.734,21.895,7.48,21.707,7.293z M20,15.586L15.586,20H8.414L4,15.586V8.414L8.414,4h7.172 L20,8.414V15.586z"></path></svg>',
        color: "danger",
        position: "top-center",
        title: "Incorrect email or password",
      });
    },
  },
  watch: {
    $route: function () {
        if (this.$route.query.m && this.$route.query.m === "inc") {
          this.openNotification();
        }
      },
  },
  ssr: false,
  mounted() {
    if (this.$route.query.m && this.$route.query.m === "inc") {
      this.openNotification();
    }
  },
};
</script>

<style scoped>
.login-container {
  width: 400px;
  background-color: white;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  border-radius: 20px;
  padding: 10px;
}

h4 {
  text-align: center;
}

h4 span {
  font-weight: normal;
}

header {
  color: #fdfdfd;
}

@media only screen and (max-width: 500px) {
  .login-container {
    width: 300px;
  }
}

@media only screen and (max-width: 350px) {
  .login-container {
    width: 250px;
  }
}
</style>
