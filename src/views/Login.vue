<template>
  <div class="login">
    <div class="page_header">
      <h1>Welcome! Please Log In!</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>

    <div class="content">
      <div class="popout-spanner">
        <div class="credentials-panel">
          <div class="credentials-book">
            <div class="form-input-group" id="username">
              <label for="username">👤 Username</label>
              <input
                type="text"
                id="username"
                v-model="user.username"
                required
                autofocus
              />
            </div>
            <div class="form-input-group" id="password">
              <label for="password">🔒 Password</label>
              <input
                type="password"
                id="password"
                v-model="user.password"
                required
              />
            </div>
            <div class="button-container">
              <button class="signin-button" v-on:click="login">Sign in</button>
              <button class="signin-button" v-on:click="register">
                Register
              </button>
            </div>

            <div class="status-container">
              <div class="alert" role="alert" v-if="invalidCredentials">
                Invalid username or password.
              </div>
              <div
                class="alert"
                role="alert"
                v-if="this.$route.query.registration"
              >
                Thank you for registering, please sign in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "login-view",
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      invalidCredentials: false,
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push({ path: "/members" });
          }
        })
        .catch((error) => {
          const response = error.response;

          if (response.status === 401) {
            this.invalidCredentials = true;
          }
        });
    },
    register() {
      this.$router.push({ path: "/register" });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.credentials-panel {
  display: flex;
  width: 100%;
  justify-content: center;
}

.credentials-book {
  display: flex;
  background-image: url("../assets/images/open_book_transparent-removebg-preview.png");
  background-repeat: no-repeat;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-position: center;
  width: 100%;
  height: 400px;
  filter: drop-shadow(20px 30px 16px rgba(0, 0, 0, 0.329));
}
.form-input-group {
  font-family: "Montserrat", sans-serif;
  color: rgb(88, 85, 99);
  
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}

.alert {
  text-decoration: none;
  color: black;
  text-align: center;
  font-family: var(--main-font);
  background-color: bisque;
}

.signin-button {
  transition-duration: 0.4s;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(231, 247, 217);
  font-family: var(--main-font);
  color: rgb(48, 46, 49);
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 3px;
  margin-top: 10px;
  width: 80px;
}
.signin-button:hover {
  background-color: rgb(115, 147, 126);
}

/* -- Mobile Large/landscape -- */
@media (min-width: 501px) and (max-width: 1000px) {

  .content{
    top:95%;
  }
  .credentials-panel {
    width: 75%;
    justify-content: center;
    align-items: center;
  }

  .credentials-book {
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: 65%;
    height: 300px;
  }
}

/* -- Mobile -- */
@media (max-width: 500px) {
  .page_header{
  }

  .credentials-panel {
    width: 100%;
    height: 350px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  }

  .credentials-book {
    justify-content: center;
    align-items: center;
    background-position: center;
    background-size: 100%;
    height: 300px;
  }
}
</style>
