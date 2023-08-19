<template>
  <div class="register">
    <div class="page_header">
      <h1>Create Account</h1>
      <img
        class="floating"
        src="../assets/images/sharpened-transparent-logo.png"
      />
    </div>
    <div class="content">
      <div class="registration-panel">
        <div role="alert" v-if="registrationErrors">
          {{ registrationErrorMsg }}
        </div>

        <form @submit.prevent="register">
          <div>
            <label for="firstName">First Name: </label>
            <input
              type="text"
              id="firstName"
              v-model="user.firstName"
              required
              autofocus
            />
          </div>

          <div>
            <label for="lastName">Last Name: </label>
            <input
              type="text"
              id="lastName"
              v-model="user.lastName"
              required
              autofocus
            />
          </div>
          <div>
            <label for="email">Email: </label>
            <input
              type="email"
              id="email"
              v-model="user.email"
              required
              autofocus
            />
          </div>
          <div>
            <label for="username">Username: </label>
            <input
              type="text"
              id="username"
              v-model="user.username"
              required
              autofocus
            />
          </div>
          <div>
            <label for="password">Password: </label>
            <input
              type="password"
              id="password"
              v-model="user.password"
              required
            />
          </div>
          <div>
            <label for="confirmPassword">Confirm Password: </label>
            <input
              type="password"
              id="confirmPassword"
              v-model="user.confirmPassword"
              required
            />
          </div>
          <button class="submit" type="submit">Create Account</button>
          <router-link class="toLogin" :to="{ name: 'login' }"
            >Already have an account? Log in.</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "register-view",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        role: "user",
      },
      registrationErrors: false,
      registrationErrorMsg: "",
    };
  },
  methods: {
    register() {
      this.clearErrors();
      if (this.user.password != this.user.confirmPassword) {
        this.registrationErrors = true;
        this.registrationErrorMsg = "Passwords must match.";
      } else {
        authService
          .register(this.user)
          .then((response) => {
            if (response.status == 201) {
              this.$router.push({
                path: "/login",
                query: { registration: "success" },
              });
            }
          })
          .catch((error) => {
            const response = error.response;
            this.registrationErrors = true;
            if (response.status === 400) {
              this.registrationErrorMsg = "Bad Request: Validation Error";
            } else {
              this.registrationErrorMsg =
                "An error ocurred during registration.";
            }
          });
      }
    },
    clearErrors() {
      this.registrationErrors = false;
      this.registrationErrorMsg = "There were problems registering this user.";
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.registration-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(197, 124, 65, 0.356);
  box-shadow: var(--panel-shadow);
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 15px;
  width: 50%;
}

form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-end;
}

form button {
  align-self: center;
  margin: 15px;
}

label {
  margin: 1px;
  font-size: 21px;
}
input {
  margin: 5px;
  font-size: 16px;
}

.toLogin {
  text-decoration: underline;
  color: black;
  font-family: "Montserrat", sans-serif;
  align-self: center;
}

.submit {
  transition-duration: 0.2s;
  padding: 12px 28px;
  border: 2.5px solid rgb(182, 90, 10);
  background-color: rgba(255, 200, 154, 0.8);
  font-size: 15px;
}

.submit:hover {
  background-color: rgb(182, 90, 10);
}

/*-- Mobile --*/
@media (max-width: 500px) {
  .registration-panel {
    margin-bottom: 25px;
    padding: 10px;
    width: 95%;
  }

  form button {
    align-self: center;
    margin: 15px;
  }

  label {
    font-size: 15px;
  }
}
</style>
