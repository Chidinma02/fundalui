<template>
  <div>
    <div class="container">
      <div class="row mt-2">
        <div class="col-12 col-lg-6">
          <!-- <div class="row"></div> -->
          <div class="">
            <div class="logo">
              <img
                src="../assets/Fundall-MintGreen-Lockup.png"
                class="img-fluid"
              />
            </div>
            <div class="text-center mt-1">
              <img src="../assets/Group 2.png" class="img-fluid" />
            </div>
            <div class="mt-2 logo">
              <h1 class="h1tag">
                <span class="wel">Welcome!</span> Let's get <br />to know you.
              </h1>
              <h5 class="mt-3 ht">
                Your first step toward a better financial lifestyle starts here.
              </h5>
            </div>
            <!-- <FundalLogo></FundalLogo> -->
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-1 boxshadowing">
          <p v-if="error !== null">{{ error }}</p>
          <form class="row g-3 mt-3 fo" @submit.prevent="onLogin()">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">First Name</label>
              <input
                type="text"
                class="form-control shadow-none"
                id="inputEmail4"
                placeholder="Enter First Name"
                v-model="firstname"
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Last Name</label>
              <input
                type="text"
                class="form-control shadow-none"
                id="inputPassword4"
                placeholder="Enter Last Name"
                v-model="lastname"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress" class="form-label">Email address</label>
              <input
                type="text"
                class="form-control shadow-none"
                id="inputAddress"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label shadow-none"
                >Password</label
              >
              <input
                type="password"
                class="form-control shadow-none"
                id="inputAddress2"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>
            <div class="col-12">
              <label for="inputAddress2" class="form-label"
                >Confirm Password</label
              >
              <input
                type="password"
                class="form-control shadow-none"
                id=""
                placeholder="Confirm Password"
                v-model="password_confirmation"
              />
            </div>
            <div class="col-12 ml-3 mr-3 mt-5">
              <!-- <button class="btn btn-success">SIGN UP</button>
               -->
              <button type="submit" class="block pt-3 pb-3">SIGN UP</button>
            </div>
          </form>
          <div class="mt-3">
            <p class="we">
              Already have an account?<span class="wel" @click="loginHere"
                >Login Here</span
              >
            </p>
            <p class="last">
              By clicking on Login,you agree to our
              <span class="wel"
                >Terms &<br />Conditions and Privacy Policy</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import FundalLogo from "../components/logo.vue";
export default {
  component: {
    // FundalLogo,
  },
  name: "FundalSign",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      password_confirmation: "",
      error: null,
    };
  },

  mounted() {},

  methods: {
    loginHere() {
      this.$router.push("/login");
    },

    async onLogin() {
      try {
        const response = await axios.post(
          "https://campaign.fundall.io/api/v1/register",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          }
        );
        console.log(response);
        this.$router.push("/login");
      } catch (error) {
        this.error = error.message;
        console.log(error);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.logo {
  text-align: left !important;
}
* {
  color: black;
}
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #4ce895;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
}
.wel {
  color: #4ce895;
}
.h1tag {
  font-size: 49px;
  font-weight: bold;
}
.ht {
  font-weight: bold;
}
.for {
  text-align: left;
  font-weight: 550;
}
.we {
  font-weight: 500;
}
.last {
  color: #97a19d;
}
input:focus {
  border: 1px solid #4ce895 !important;
}
.boxshadowing {
  box-shadow: 0 4px 8px 0 rgba(161, 160, 160, 0.2),
    0 6px 20px 0 rgba(161, 160, 160, 0.19);
}
</style>