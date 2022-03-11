<template>
  <div class="hello">
    <div class="container mt-2">
      <!-- <div class="row"> -->
      <!-- <div class="col-lg-9 col-sm-2 logo"> -->
      <!-- <img src="../assets/Fundall-MintGreen-Lockup.png" /> -->
      <!-- </div> -->
      <!-- <div class="col-lg-3 col-sm-10"> -->
      <!-- <div class="row"> -->
      <!-- <div class="col-6"><h6 class="mt-2">LOG IN</h6></div> -->
      <!-- <div class="col-6"> -->
      <!-- <button type="button" class="btn btn-success">SIGN UP</button> -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- </div> -->
      <!-- </div> -->
      <div class="row">
        <div class="col-5 col-lg-8 logo">
          <!-- <img src="../assets/Fundall-MintGreen-Lockup.png" /> -->
          <FundalLogo></FundalLogo>
        </div>
        <div class="col-3 col-lg-2 col-for-space mt-4">
          <h6 class="loggin" @click="gotoLogin">LOG IN</h6>
        </div>
        <div class="col-4 col-lg-2 col-for-space mt-3">
          <button type="button" class="button-for-sign-up" @click="goToSignup">
            <router-link to="/signup" class="navi"></router-link>SIGN UP
          </button>
        </div>
      </div>
      <FundalBodyfirst></FundalBodyfirst>
    </div>
  </div>
</template>

<script>
import FundalBodyfirst from "../components/bodyfirst.vue";
import FundalLogo from "../components/logo.vue";
export default {
  name: "HelloWorld",
  components: {
    FundalBodyfirst,
    FundalLogo,
  },
  methods: {
    goToSignup() {
      this.$router.push("/signup");
    },
    gotoLogin() {
      this.$router.push("/login");
    },
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
* {
  color: black;
}
.button-for-sign-up {
  background-color: #4ce895;
  border: #4ce895;
  padding: 6px 11px 6px 11px;
  border-radius: 6px;
  font-weight: bold;
}
.logo {
  text-align: left;
}
.col-for-space {
  text-align: right;
}
.loggin {
  font-weight: bold;
}
</style>
